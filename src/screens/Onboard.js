import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, Image, View, Dimensions, } from 'react-native';
import colors from '../components/colors';
import AppIntroSlider from 'react-native-app-intro-slider';

const {width, height} = Dimensions.get('window');

const data = [
    {
      key: 'one',
      title: 'Get real-time healthcare from doctors anywhere in the world',
      text: '',
      image: require('../images/onboard1.png'),
      bg: colors.body,
    },
    {
      key: 'two',
      title: 'Track your medical records and health goals easily and quickly',
      text: '',
      image: require('../images/onboard2.png'),
      bg: colors.body,
    },
    {
      key: 'three',
      title: 'Safe Secure your health treatment, records and process',
      text: '',
      image: require('../images/onboard3.png'),
      bg: colors.body,
    },
];

const Onboard = ({navigation}) => {

    const renderItem = ({item}) => {
      return (
        <View style={[styles.slide, {backgroundColor: item.bg}]}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    };
  
    const keyExtractor = (item) => item.title;
  
    const renderNextButton = () => {
      return (
        <View style={styles.button}>
          <Text style={styles.btnText}>Next</Text>
        </View>
      );
    };
  
    const renderSkipButton = () => {
      return (
        <View style={styles.skipTextWrapper}>
          <Text style={styles.bText}>Skip</Text>
        </View>
      );
    };
  
    const renderDoneButton = () => {
      return (
        <View style={styles.button}>
          <Text style={styles.btnText}>Start</Text>
        </View>
      );
    };
  
    const handleDone = () => {
      props.handleDone();
    }
  
    return (
      <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor={colors.green} />
          <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            renderDoneButton={renderDoneButton}
            renderSkipButton={renderSkipButton}
            renderNextButton={renderNextButton}
            bottomButton
            showSkipButton
            data={data}
            onDone={() => navigation.navigate('Signup')}
          />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
      
    },
    image: {
      height: '50%',
      width,resizeMode: 'contain',
      marginBottom: 50,
    },
    title: {
      fontSize: 24,
      color: colors.black,
      textAlign: 'center',
      fontFamily: '',
      marginHorizontal: 40,
    },
    button: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: colors.green,
    },
    skipTextWrapper: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      color: colors.white,
    },
    bText: {
        color: colors.green,
    },
    activeDotStyle: {
      bottom: 30,
      backgroundColor: colors.green,
      width: 20,
    },
    dotStyle: {
      bottom: 30,
      backgroundColor: colors.grey,
    },
  });
  
  export default Onboard;