import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function FriendHistory(friend) {
    const data = {
        labels: ['Distance (km)', 'Time (hours)', 'Elevation (m)'],
        datasets: [
          {
            data: [100, 4, 2],
          },
        ],
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.header}>John Doe's Profile</Text>
          <View style={styles.chartContainer}>
            <BarChart
              data={data}
              width={350}
              height={220}
              yAxisLabel=""
              chartConfig={{
                backgroundGradientFrom: '#f5f5f5',
                backgroundGradientTo: '#f5f5f5',
                fillShadowGradient: '#d9d9d9',
                fillShadowGradientOpacity: 1,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(92, 184, 92, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
            />
          </View>
          <View style={styles.statContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>20</Text>
              <Text style={styles.statLabel}>Distance (km)</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>2</Text>
              <Text style={styles.statLabel}>Time (hours)</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>30</Text>
              <Text style={styles.statLabel}>Elevation (m)</Text>
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        backgroundColor: '#fff',
      },
      header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      chartContainer: {
        padding: 10,
      },
      statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
      },
      statItem: {
        alignItems: 'center',
      },
      statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      statLabel: {
        fontSize: 14,
        color: '#999',
      },
    });