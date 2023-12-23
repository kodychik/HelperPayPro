import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react'
import {View ,Text, StyleSheet, SafeAreaView
, Dimensions, ImageBackground, Image, TextInput, Button, Alert } from 'react-native';
import Home from './Home';
import Register from './Register';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



const Login = ({navigation}) => {

    //const router = useRouter();
    //<MaterialIcons name="email" size={24} color="black" />
    //<Feather name="lock" size={24} color="black" />

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const checkUsernameAndPassword = () => {
        if (email == null) {
            Alert.alert("Email cannot be empty");
            return 0;
        }
        else if (password == null) {
            Alert.alert("Password cannot be empty");
            return 0;
        }
        else if (password.length < 8) {
            Alert.alert("Password must contain 8 characters");
            return 0;
        }
        
        return 1;
    }

    return (
        
            <View style={styles.root}>
                <StatusBar hidden />
                <ImageBackground
                    source={require('../assets/purple.jpg')}
                    style={styles.container}>
                    
                    <Text style = {styles.titleText}>Welcome</Text>
                    
                    <View style={styles.inputContainer}>

                        <MaterialIcons style={{marginLeft: 7}} name="email" size={24} color="black" />
                        <TextInput style={styles.input} value={email} onChange={e => setEmail(e)} placeholder="Email" />

                        
                    </View>
                    <View style={styles.inputContainer}>
                        <Feather style = {{marginLeft: 7}} name="lock" size={24} color="black" />

                        <TextInput style={styles.input} value={password} onChange={e => setPassword(e)} placeholder="Password" type="password"/>

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

                            onPress={() => {
                                x = checkUsernameAndPassword();
                                if (x == 1) {
                                    navigation.navigate("Home");
                                }
                                
                            }}
                        />
                    </View>
                    <View style={styles.signupBox}>
                        <Text style = {{color:'white', marginRight:5}}>
                            Don't Have an Account?
                        </Text>
                        <Text style= {{color:'white', fontWeight:'bold'}}
                            onPress = {() => navigation.navigate("Register")}
                        >
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
        paddingTop: screenHeight * 0.15,
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
        height: screenHeight * 0.05,
        marginVertical: 10,
        marginHorizontal: 50,

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
        fontWeight: 'bold',
    },
    loginBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'plum',
        height: screenHeight * 0.08,
        marginVertical: 10,
        marginHorizontal:50,
        borderRadius: 40,
    },
    signupBox: {
        flexDirection: 'row',
        paddingVertical: 10,
        left: screenWidth * 0.3,
    }
})

export default Login ;