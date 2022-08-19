import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, } from 'react-native';
import colors from '../components/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function App({navigation}) {
  const { control, handleSubmit, watch, } = useForm();
  const pwd = watch('password')

  const onSubmitPressed = (data) => {
    console.warn(data)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Image 
              source={require('../images/forgotPwd.png')}
              style={[styles.logo, ]}
              resizeMode='contain'
          />
        </View>
        
        <View style={styles.bottom}>
          <Text style={styles.h1}>Forgot Password?</Text>
          <Text style={styles.h2}>
              Don't worry! it happens. Please enter the address associated with your account.
          </Text>
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
          <View 
              style={{
                  marginVertical: 10,
              }}
          ></View>
          <CustomButton 
              title="Submit" 
              onPress={handleSubmit(onSubmitPressed)} 
              type="PRIMARY"
          />

          
          <Text style={styles.text}>
            Already have an account?{' '}
            <Text 
                style={styles.link} 
                onPress={() => navigation.navigate('Login')}
            >Sign in</Text>{' '}
            <Text style={styles.text}>Now</Text> 
          </Text>
  
        </View>

        <View style={{marginVertical: 5,}}></View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.5;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.body,
    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
//    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: '100%',
    height: 400,
    marginBottom: 30
    //marginBottom: -20,
    
  },
  log: {
    width: 100,
    height: 100,
    tintColor: colors.green,
    //marginBottom: -20,
    alignSelf: 'center',
  },
  top: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 80,
  },
  bottom: {
    padding: 20,
 //   flex: 1,
 },
  text: {
    color: colors.darkGreen,
    textAlign: 'center',
    fontSize: 13,
  },
  link: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'bold',
  },
  h1: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  h2: {
    color: colors.black,
    fontSize: 14,
    paddingBottom: 10,
  },
});