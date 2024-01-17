import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>app</Text>
                    <Text style={styles.titleText}>estelar</Text>
                </View>
              </SafeAreaView>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}