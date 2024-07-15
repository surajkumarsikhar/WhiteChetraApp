import { StyleSheet, Image, Text, StatusBar, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Fontisto from "react-native-vector-icons/Fontisto"
import { useFonts } from 'expo-font'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {
    const [secureEntry, setSecureEntry] = useState(true);
    const navigation= useNavigation();
    const handleGoback= () => {
        navigation.goBack();
    };
    const handleLogin= () => {
        navigation.navigate("Login")
    };
    const [loaded] = useFonts({
        Playfair: require('../assets/fonts/PlayfairDisplay-Medium.ttf'),
        Poppinslight: require('../assets/fonts/Poppins-Light.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoback}>
                <FontAwesome6 name={"arrow-left"} color="#ff5353" size={25} />
            </TouchableOpacity>
            <View style={styles.textcontainer}>
                <Text style={styles.headingtext}>Ready To</Text>
                <Text style={styles.headingtext}>Begin?</Text>
            </View>
            <View style={styles.formcontainer}>
                <View style={styles.inputcontainer}>
                    <Fontisto name={"email"} size={30} color={'#ff5353'} />
                    <TextInput style={styles.textInput} placeholder='Enter your email' placeholderTextColor={'#fc8d4d'}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Ionicons name={"phone-portrait-outline"} size={30} color={'#ff5353'} />
                    <TextInput style={styles.textInput} placeholder='Enter your phone no' placeholderTextColor={'#fc8d4d'}
                    keyboardType='number-pad'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Ionicons name={"lock-closed-outline"} size={30} color={'#ff5353'} />
                    <TextInput style={styles.textInput} placeholder='Enter your password' placeholderTextColor={'#fc8d4d'}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() =>{
                        setSecureEntry((prev) => !prev);
                    }}>
                        <Ionicons name={"eye-outline"} size={20} color={'#ff5353'} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginButtonText}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.continue}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source={require("../assets/images/google-color-icon.png")} style={styles.googleImage}/>
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.signupText}>Login
                    </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: StatusBar.currentHeight,
        padding: 10
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        // backgroundColor: '#D9D9D9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textcontainer: {
        marginVertical: 20,
    },
    headingtext: {
        marginTop:10,
        marginVertical:2,
        fontSize: 40,
        color: '#ff0000',
        fontFamily: 'Playfair',
        marginBottom:2,
    },
    formcontainer: {
        marginTop: 20,

    },
    inputcontainer: {
        borderWidth: 1,
        borderColor: '#7f0000',
        borderRadius: 100,
        paddingHorizontal: 20,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginVertical: 15,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Poppinslight',
    },
    forgotpsswrd: {
        textAlign: 'right',
        color: '#4834DF',
        fontFamily:'Poppins',
    },
    loginButtonWrapper: {
        backgroundColor: '#ff5353',
        borderRadius: 80,
        marginTop: 20,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontFamily: 'Poppins',
        textAlign: 'center',
        padding: 10,
    },
    continue: {
        textAlign:'center',
        marginVertical: 20,
        fontSize: 15,
        fontFamily: 'Playfair',
        color: '#1287A5',
    },
    googleImage: {
        height: 25,
        width: 25,
    },
    googleButtonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#ff5353',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 10,
    },
    googleText: {
        fontSize: 17,
        fontFamily: 'Poppins',
        marginTop: 3,

    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 2,
    },
    accountText: {
        color: "#1287A5",
        fontFamily:'Playfair',
        fontSize:15,

    },
    signupText: {
        marginTop:2,
        marginLeft:6,
        fontSize:16,
        color: '#ff5353',
        fontFamily: 'Playfair',
        fontWeight: 'bold',
    },

})