import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View ,Text, StyleSheet, SafeAreaView
, Dimensions, ImageBackground, Image, TextInput, Button, Alert } from 'react-native';
import Home from './Home';

const Login = ({navigation}) => {

    //const router = useRouter();
    //<MaterialIcons name="email" size={24} color="black" />
    //<Feather name="lock" size={24} color="black" />
    return (
        
            <View style={styles.root}>
                <StatusBar hidden />
                <ImageBackground
                    source={require('../assets/purple.jpg')}
                    style={styles.container}>
                    
                    <Text style = {styles.titleText}>Welcome</Text>
                    
                    <View style={styles.inputContainer}>
                        
                        <TextInput style={styles.input} placeholder="Email" />
                    </View>
                    <View style={styles.inputContainer}>
                        
                        <TextInput style={styles.input} placeholder="Password" />
                    </View>
                    <View style={styles.forgot}>
                        <Text
                            style={styles.forgotText}
                            onPress = {()=> Alert.alert("Coming Soon", "Forgot Password Implementation")}

                        >Forgot Password</Text>
                    </View>
                    <View style={styles.loginBox}>
                        <Button
                            color="white"
                            title="Login"

                            onPress={() => navigation.navigate("Home")}
                        />
                    </View>
                    <View style={styles.signupBox}>
                        <Text style = {{color:'white', marginRight:5}}>
                            Don't Have an Account?
                        </Text>
                        <Text style= {{color:'white', fontWeight:'bold'}}>
                            Sign Up
                        </Text>
                    </View>
                    
                    
                    

                    

                </ImageBackground>
            </View>
        
    )
}


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    itemsCenter: {alignItems:'center'},
    root: {flex: 1},
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleText: {
        paddingTop: screenHeight * 0.2,
        paddingBottom: screenHeight * 0.05,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 60,
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "white",
        height: 40,
        marginVertical: 10,
        marginHorizontal: 30,
        borderRadius: 7,
    }
    ,
    input: {
        padding: 10,
        
    },
    forgot: {
        flexDirection: 'row',
        left: screenWidth * 0.6,
    },
    forgotText: {
        color: 'white',
    },
    loginBox: {
        backgroundColor: 'plum',
        marginVertical: 10,
        marginHorizontal:50,
        borderRadius: 50,
    },
    signupBox: {
        flexDirection: 'row',
        paddingVertical: 10,
        left: screenWidth * 0.3,
    }
})

export default Login ;