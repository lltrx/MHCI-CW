// A custom react hook for handling device motion for expo apps
import { useState, useEffect } from 'react';
import { DeviceMotion, Accelerometer } from 'expo-sensors';

export default function useDeviceMotion() {
    const speed = useDeviceSpeed();
    const [direction, setDirection] = useState(0);
    const roll = useDeviceRoll();

    useEffect(() => {

    }, []);

    return [speed, direction, roll]
}


export function useDeviceSpeed() {
    // gets device forward movement speed in m/s
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        // use accelerometer to get speed
        const subscription = Accelerometer.addListener(accelerometerData => {
            // normalize speed
            let normal = Math.sqrt(accelerometerData.x**2 + accelerometerData.y**2 + accelerometerData.z**2);
            normal = Math.round(normal * 100) / 100;
            setSpeed(normal);

            return () => subscription.remove();
        });
    }, []);

    return speed;
}

export function useDeviceRoll() {
    // gets device roll in degrees using device motion
    const [roll, setRoll] = useState(0);

    useEffect(() => {
        // use device motion to get roll
        const subscription = DeviceMotion.addListener(deviceMotionData => {
            // normalize roll
            let alphaRotation = deviceMotionData.rotation.alpha;
            // it changes by 1 every 90 degrees
            // make it change by 1 every 1 degrees
            alphaRotation = (alphaRotation * 90) -20;
            setRoll(Math.round(alphaRotation));
            return () => subscription.remove();
        });
    }, []);

    return roll;
}