import { StyleSheet, Image, Text, StatusBar, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [loaded] = useFonts({
    Playfair: require('../assets/fonts/PlayfairDisplay-Medium.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login")
  };
  const handleSignup = () => {
    navigation.navigate("Signup")
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <Image source={require("../assets/images/faq.png")} style={styles.faq} />
      </View>

      <Text style={styles.welcometxt}>Social Media Mastery at Your Fingertips!</Text>

      <Image source={require("../assets/images/men_run.jpg")} style={styles.homeimg} />
      <Text style={styles.subtitle}>Amplify Your Digital Presence With</Text>
      <Text style={styles.appname}>White Chetra

      </Text>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper, { backgroundColor: '#ff5353' }]}
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper}onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  homeimg: {
    height: 300,
    width: 450,
    resizeMode: "center",
    marginLeft: 30,
    // mixBlendMode: "screen",
    //paddingBottom: 30,
  },
  icon:{
    marginTop:30,
    gap:300,
    display: "flex",
    flexDirection:"row",
    // alignItems:"center",
    // justifyContent:"center",
  },
  logo:{
    display:"inline",
    height: 35,
    width: 35,
    
  },

  faq:{
    display:"inline",
    height: 35,
    width: 30,
    // mixBlend:"screen",
    // marginTop:0,
    // marginBottom:20,
    // marginLeft:350,
    // marginRight:5,
  },

  welcometxt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontFamily: 'Playfair',
    color: '#ff5d00',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 25,
    color: '#252f40'
    //marginVertical: 20,
  },
  appname: {
    fontSize: 36,
    fontWeight: '500',
    color: '#ff5d00',
    fontFamily:"Playfair",
    marginVertical: 20,
  },
  buttoncontainer: {
    flexDirection: 'row',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#252f40',
    width: '80%',
    height: 60,
    borderRadius: 70,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    // backgroundColor: '#ff5d00',
    borderRadius: 67,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontFamily: 'Poppins',
  },
  signupButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins',
  },
});





