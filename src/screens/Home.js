import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import colors from '../components/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';



export default function App() {

  return (
    <View style={styles.container}>
      <Text>Welcome Welcome</Text>
      <StatusBar style="auto" />
    </View>
  );;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.body,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});