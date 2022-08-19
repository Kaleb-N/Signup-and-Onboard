import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../components/colors';

const CustomButton = ({title, type, onPress = () => {}}) => {
  return (
    <TouchableOpacity 
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.button, styles[`button_${type}`]]}
    >
        <Text style={[styles.textBtn, styles[`textBtn_${type}`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_PRIMARY: {
        backgroundColor: colors.green,
    },
    button_SECONDARY: {
        backgroundColor: colors.body,
        borderColor: colors.green,
        borderWidth: 0.5,
    },
    button_TERTIARY: {},
    
    textBtn_SECONDARY: {
        color: colors.green,
    },
    textBtn_TERTIARY: {
        fontSize: 13,
        color: colors.green,
    },
    textBtn_PRIMARY: {
        color: colors.white,
    },
    textBtn: {
        fontWeight: 'bold',
        fontSize: 17,
    }
});

export default CustomButton;