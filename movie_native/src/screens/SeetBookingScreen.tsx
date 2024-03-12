import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SeetBookingScreenProps { }

const SeetBookingScreen = (props: SeetBookingScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>SeetBookingScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default SeetBookingScreen;
