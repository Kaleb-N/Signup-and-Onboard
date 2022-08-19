
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Dimensions, Text, Image, useWindowDimensions } from 'react-native';
import colors from '../components/colors';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const CustomInput = ({ 
  control, 
  name, 
  password,
  rules = {}, 
  placeholder, 
  secureTextEntry, 
  label,
  iconName,
  onFocus = () => {},
}) => {

  const {height} = useWindowDimensions();
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(password);

  return (
    <>
      <Controller 
        control={control}
        name={name}
        rules={rules}
        
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.container, {borderColor: error ? 'red' : isFocused ? 'green' : '#B4F9D2'}]}>
              <Icon name={iconName} style={{color: colors.green, fontSize: 14, marginRight: 10,}} />
              <TextInput 
                value={value}
                onChangeText={onChange}
                onBlur={() => {
                  setIsFocused(false);
                }}
                
                secureTextEntry={showPassword}
                placeholderTextColor={colors.grey}
                placeholder={placeholder}
                style={styles.input} 
                onFocus={() => {
                  onFocus();
                  setIsFocused(true);
                }}
              />
              {password && (
                <Icon 
                  onPress={() => setShowPassword(!showPassword)}
                  style={{fontSize: 15, color: colors.green}} 
                  name={showPassword ? "eye-off-outline" : "eye-outline"} 
                />
              )}
            </View>
            {error && (
              <Text style={styles.error}>{error.message || 'Error' }</Text>
            )}
          </>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blandGreen,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginVertical: 1,
    fontSize: 12,
    color: colors.darkGreen,
  },
  input: {
    flex: 1,
    color: colors.darkGreen,
    height: 35,
  },
  error: {
    color: colors.red,
    alignSelf: 'stretch',
    fontSize: 10,
  }
});

export default CustomInput;


