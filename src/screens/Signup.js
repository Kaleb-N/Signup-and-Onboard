import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import colors from '../components/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function App({navigation}) {
  const { control, handleSubmit, watch, } = useForm();
  const pwd = watch('password');

/*  const [inputs, setInputs] = React.useState({
    email: '',
    username: '',
    fullName: '',
    phone: '',
    password: '',
    confirm: '',
  });*/

  const onRegisterPressed = (data) => {
    console.warn(data);
    navigation.navigate('Home');
  };
  const onSignInApple = () => {
    console.warn('onSignInApple')
  };
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook')
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20, marginBottom: 10,}}>
          <Image 
            source={require('../images/logo.png')}
            style={[styles.logo, ]}
            resizeMode='contain'
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: colors.darkGreen, fontSize: 30, fontWeight: 'bold',}}>
            Sign Up
          </Text>
          <Text style={{color: colors.darkGreen, fontSize: 15, marginVertical: 10}}>
            Kindly sign up to get started
          </Text>
        </View>
        <CustomInput 
          label="Full Name*"
          iconName="account-outline"
          name="fullName"
          control={control} 
          placeholder='FullName'
          rules={{required: 'Please enter name'}} 
        />

        <CustomInput 
          label="Username*"
          name="username" 
          iconName="account-outline"
          control={control} 
          placeholder='Username'
          rules={{
            required: 'Please enter username', 
            minLength: {
              value: 5,
              message: 'Minimum of 5 characters'
            },
            maxLength: {
              value: 15,
              message: 'Maximum of 15 characters'
            },
          }}
        />

        <CustomInput 
          label="Email*"
          name="email" 
          iconName="email-outline"
          control={control} 
          placeholder='Email'
          rules={{
            required: 'Please enter Email',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'
          }}}
        />

        <CustomInput 
          label="Password*"
          name="password" 
          iconName="lock-outline"
          control={control} 
          placeholder='Password'
          password
          rules={{
            required: 'Enter password', 
            minLength: {
              value: 5,
              message: 'Minimum of 5 characters'
            }
          }}
        />
        <CustomInput 
          label="Confirm Password*"
          name="confirmPassword" 
          iconName="lock-outline"
          password
          control={control} 
          placeholder='confirm Password'
          rules={{
            required: 'Repeat password', 
            validate: value => value == pwd || 'Password does\'t match'
          }}
        />

        <View style={{marginVertical: 10,}}></View>

        <CustomButton 
          title="Sign Up" 
          onPress={handleSubmit(onRegisterPressed)} 
          type="PRIMARY"
        />

        <View style={{marginVertical: 5,}}></View>

        <Text style={styles.text}>
          By creating an account you agree to our terms{' '} 
          <Text style={styles.linked}>Terms of use and Private Policy</Text> 
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 10, paddingTop: 20,}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{paddingHorizontal: 10, textAlign: 'center', color: colors.black}}>Or continue with</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

        <View 
          style={{
            width: '50%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 30,
            
          }}
        >
          <Text 
            onPress={onSignInApple}
            style={styles.social}
          >
            <Image 
              source={require('../images/apple.png')}
              style={[]}
              resizeMode='contain'
            />
          </Text>

          <Text 
            onPress={onSignInFacebook}
            style={styles.social}
          >  
            <Image 
              source={require('../images/google.png')}
              style={[]}
              resizeMode='contain'
            />
          </Text>
        </View>    

        <Text style={styles.text}>
          Already have an account?{' '}
          <Text 
            style={styles.link} 
            onPress={() => navigation.navigate('Login')}
          >Sign in</Text>{' '}
          <Text style={styles.text}>Now</Text> 
        </Text>

        <View style={{marginVertical: 20,}}></View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.body,
    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 70,
    height: 70,
    tintColor: colors.green,
    //marginBottom: -20,
    alignSelf: 'center',
  },
  text: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 13,
  },
  social: {
    color: colors.black,
      textAlign: 'center',
      height: 55,
      width: 55,
//      borderColor: colors.black,
//      borderWidth: 0.5,
  },
  link: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'bold',
  },
  linked: {
    color: colors.green,
    fontSize: 13,
  },
});