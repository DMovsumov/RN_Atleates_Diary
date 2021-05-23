import { Animated, StyleSheet } from 'react-native';
import Loader from '../../../../assets/loader';
import React, { useEffect, useRef } from 'react';

const BtnLoader = () => {
    const animated = useRef(new Animated.Value(0)).current;

    let rotateAnimation = animated.interpolate({
        inputRange: [0, 50],
        outputRange: ['0deg', '360deg'],
    });

    const customStyle = {
        transform: [{ rotate: rotateAnimation }],
    };

    useEffect(() => {
        Animated.loop(
            Animated.timing(animated, {
                toValue: 50,
                duration: 2500,
                useNativeDriver: true,
            }),
            {
                iterations: -1,
            },
        ).start();
    }, []);

    return (
        <Animated.View style={[styles.circle, customStyle]}>
            <Loader />
        </Animated.View>
    );
};

export default BtnLoader;

const styles = StyleSheet.create({
    circle: {
        height: 30,
        width: 30,
    },
});
