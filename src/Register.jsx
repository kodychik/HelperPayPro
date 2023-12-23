import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react'
import {View ,Text, StyleSheet, SafeAreaView
, Dimensions, ImageBackground, Image, TextInput, Button, Alert } from 'react-native';
import { MaterialCommunityIcons,MaterialIcons,Feather, Ionicons } from '@expo/vector-icons'; 
import Login from './Login';



export default function Register ({navigation}) {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false); 
    const [confPassword, setConfPassword] = useState(false); 
  
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    const toggleConfirmPassword = () => { 
        setConfPassword(!confPassword); 
    }; 

    const checkUsernameAndPassword = () => {
        if (!email) {
          Alert.alert('Email cannot be empty!');
          return false;
        } else if (!name) {
          Alert.alert('Please include your full name!');
          return false;
        } else if (!password) {
          Alert.alert('Password cannot be empty!');
          return false;
        } else if (password.length < 8) {
          Alert.alert('Password must contain 8 characters!');
          return false;
        } else if (password !== confirmPassword) {
          Alert.alert('Passwords do not match!');
          return false;
        }
    
        return true;
    };



    return (
        <View style={styles.root}>
            <StatusBar hidden />
            <ImageBackground
                source={require('../assets/purple.jpg')}
                style={styles.container}>
                
                <Text style = {styles.titleText}>Sign Up</Text>

                <View style={styles.inputContainer}>
                    <Ionicons style={{marginLeft: 7}} name="person" size={24} color="black" />
                    <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder="Full Name" />
                </View>
                
                <View style={styles.inputContainer}>
                    <MaterialIcons style={{marginLeft: 7}} name="email" size={24} color="black" />

                    <TextInput style={styles.input} value={email} onChangeText={e => setEmail(e)} placeholder="Email" />
                </View>
                <View style={styles.inputContainer}>
                    <Feather style = {{marginLeft: 7}} name="lock" size={24} color="black" />

                    <TextInput style={styles.input} value={password} onChangeText={e => setPassword(e)} placeholder="Password" type="password"
                        secureTextEntry={!showPassword} 
                    
                    />
                    <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleShowPassword} 
                /> 
                </View>
                <View style={styles.inputContainer}>
                    <Feather style={{marginLeft: 7}} name="unlock" size={24} color="black" />
                    <TextInput style={styles.input} value={confirmPassword} onChangeText={e => setConfirmPassword(e)} placeholder="Confirm Password" type="password" secureTextEntry={!confPassword} />
                    <MaterialCommunityIcons 
                    name={confPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleConfirmPassword} 
                /> 
                </View>
                
                <View style={[styles.loginBox]}>
                    <Button
                        color="white"
                        title="Create Account"
                            
                        
                        onPress={() => {
                            x = checkUsernameAndPassword();
                            if (x) {
                                navigation.navigate("Login");
                                Alert.alert("Account Successfully Created");
                            }
                            
                        }}
                    />
                </View>
                <View style={styles.signupBox}>
                        <Text style = {{color:'white', marginRight:5}}>
                            Already Have an Account?
                        </Text>
                        <Text style= {{color:'white', fontWeight:'bold'}}
                            onPress = {() => navigation.navigate("Login")}
                        >
                            Login
                        </Text>
                </View>
                
                
                

                

            </ImageBackground>
        </View>
            
    );
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
        paddingTop: screenHeight * 0.08,
        paddingBottom: screenHeight * 0.03,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        textShadowColor: 'black',
        textShadowRadius: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "white",
        height: screenHeight * 0.05,

        marginVertical: 10,
        marginHorizontal: 50,
        borderRadius: 7,
    }
    ,
    input: {
        padding: 10,
        flex: 1,
    },
    icon: {
        marginHorizontal: 10,
    },
  
    forgot: {
        flexDirection: 'row',
        left: screenWidth * 0.6,
    },
    forgotText: {
        color: 'white',
        fontWeight: 'bold',
    },
    loginBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'plum',
        height: screenHeight * 0.08,
        marginTop: 25,
        marginHorizontal:50,
        borderRadius: 50,
        fontSize:30,
        fontWeight: 'bold',
    },
    signupBox: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginLeft: screenWidth * 0.3,
    }
    
})

