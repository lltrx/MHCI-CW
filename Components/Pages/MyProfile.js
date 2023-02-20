import {View, Text, StyleSheet} from 'react-native';
import {LineChart, ProgressChart} from 'react-native-chart-kit';

export default function MyProfile () {
    const data = [
        {
        distance: 10,
        time: 20,
        speed: 30,
        },
        {
        distance: 20,
        time: 90,
        speed: 20,
        },
        {
        distance: 15,
        time: 30,
        speed: 30,
        },
        {
        distance: 20,
        time: 40,
        speed: 25,
        },
        {
        distance: 10,
        time: 45,
        speed: 20,
        },
    ];
    
    const distances = data.map(item => item.distance);
    const times = data.map(item => item.time);
    const speeds = data.map(item => item.speed);
    
    return (
        <View style={styles.container}>
            <View style={styles.userDetails}>
                <Text>My best cycle</Text>
                <Text>Best Distance: 20 km</Text>
                <Text>Elpased Time: 40 minutes</Text>
                <Text>Average Speed: 25 km/h</Text>
                <Text>My last cycle</Text>
                <Text>Distance: 10 km</Text>
                <Text>Elpased Time: 45 minutes</Text>
                <Text>Average Speed: 20 km/h</Text>
            </View>
            <View style={styles.chartContainer}>
            <LineChart
                data={{
                labels: ['11/01/21', '16/01/21', '21/01/21', '26/01/21', '31/01/21'],
                datasets: [
                    {
                    data: distances,
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red line
                    strokeWidth: 2, // optional
                    },
                ],
                legend: ['Distance'], // optional
                }}
                width={350} // from react-native
                height={220}
                yAxisSuffix={'km'}
                fromZero={true}
                chartConfig={{
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
                propsForDots: {
                    r: '6',
                },
                }}
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
            </View>
            <View style={styles.ProgressChart}>
            <ProgressChart
                data={{
                labels: ['Distance', 'Time', 'Speed'],
                data: [0.4, 0.6, 0.8],
                }}
                width={350}
                height={220}
                chartConfig={{
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userDetails: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    chartContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    ProgressChart: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
});
