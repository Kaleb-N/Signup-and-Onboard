import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import colors from '../components/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function App({navigation}) {
  const { control, handleSubmit, watch, formState:{errors}, } = useForm();
  const pwd = watch('password')

  const onRegisterPressed = (data) => {
    console.warn(data);
    navigation.navigate('Home');
  };
  const onSignedPressed = (data) => {
    console.warn(data);
    navigation.navigate('Home');
  };
  const onSignInApple = () => {
    console.warn('onSignInApple')
  };
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook')
  };
  const forgotPassword = () => {
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
            Login In
          </Text>
          <Text style={{color: colors.darkGreen, fontSize: 15, marginVertical: 10}}>
            Log into your account
          </Text>
        </View>

        <CustomInput 
          label="Username*"
          name="username"
          control={control} 
          placeholder='Username' 
          iconName="account-outline"
          rules={{required: 'Please enter username'}}
        />

        <CustomInput 
          password
          label="Password*"
          name="password" 
          iconName="lock-outline"
          control={control} 
          placeholder='Password'
          secureTextEntry
          rules={{
            required: 'Please enter password', 
          minLength: {
            value: 5,
            message: 'Minimum of 5 characters'
          }
          }}
        />

        <View style={{marginVertical: 20,}}></View>

        <CustomButton 
          title="Sign In" 
          onPress={handleSubmit(onSignedPressed)} 
          type="PRIMARY"
        />

        <CustomButton 
          title="Recover Password" 
          onPress={() => navigation.navigate('RecoverPassword')} 
          type="TERTIARY"
        />

        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 10, paddingTop: 20,}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
          <Text style={{paddingHorizontal: 10, textAlign: 'center', color: colors.black}}>Or continue with</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>

        <View style={{marginVertical: 5,}}></View>

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
          New to HealthGo?{' '} 
          <Text 
            style={styles.link} 
            onPress={() => navigation.navigate('Signup')}
          >Sign up</Text> 
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