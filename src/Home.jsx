import React from 'react'
import {View ,Text, SafeAreaView} from 'react-native';
import {StyleSheet, Dimensions, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,MaterialIcons,Feather, Ionicons,Entypo,  FontAwesome } from '@expo/vector-icons'; 
import Currency  from './Currency';

export default function Home(){

    const unimplemented = () => {
        Alert.alert("Coming Soon !!!");
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.tgt}>
                    <MaterialCommunityIcons name="face-woman-profile" size={40} color="white" />
                    <View style={styles.goodmorn}>
                        <Text style={{color:'white', fontWeight: 'bold', fontSize:'18'}}>
                            Good Morning Gemma
                        </Text>
                        <Text style={{color:'white'}}>
                            gemma@gmail.com
                        </Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="bell-circle-outline" size={35} color="white" onPress={() => {
        unimplemented();
        
    }} />
            </View>

            <View style={styles.balance}>
                <Text style={{color:'white',fontSize: '30', fontWeight: 'thin', marginBottom: 5}}>
                    Available Balance
                </Text>
                <Text style={{color:'white', fontSize: '30', fontWeight: 'bold'}}>
                    $450.54
                </Text>
            </View>
            <View style={styles.featuresBox}>
                <View style={styles.featuresBoxText} >
                    <FontAwesome name="credit-card-alt" size={24} color="#2B00A5" onPress={() => {
        unimplemented();
        
    }}/>
                    <Text style={{fontSize: '12'}}>
                        Virtual Bank
                    </Text>
                </View>
                <View style={styles.featuresBoxText}>
                    <FontAwesome name="send" size={24} color="#2B00A5" onPress={() => {
        unimplemented();
        
    }}/>
                    <Text style={{fontSize: '12'}}>
                        Remittance
                    </Text>
                </View>
                <View style={styles.featuresBoxText}>
                    <MaterialCommunityIcons name="ticket-confirmation" size={24} color="#2B00A5" onPress={() => {
        unimplemented();
        
    }}/>
                    <Text style={{fontSize: '12'}}>
                        e-Coupon
                    </Text>
                </View>
                <View style={styles.featuresBoxText}>
                    <Entypo name="wallet" size={24} color="#2B00A5" onPress={() => {
        unimplemented();
        
    }}/>
                    <Text style={{fontSize: '12'}}>
                        e-Wallet
                    </Text>
                </View>

                
                
            </View>
            {
                /*
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: screenWidth * 0.07}}>
                <Image source={require('../assets/advert.png')} style={{width:screenWidth * 0.8, height: screenHeight * 0.2}}/>


            </View>
                */
            }
            <View style={styles.currency}>
                <Currency />
            </View>
            

            
        </SafeAreaView>
            

    )
}


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    root: {flex: 1},
    container: {
        flexDirection: 'column',
        backgroundColor: '#2B00A5',
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: screenHeight * 0.03,
    },
    tgt: {
        paddingHorizontal: 0,
        flex: 0.78,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    goodmorn: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    balance: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: screenHeight * 0.03,
    },
    featuresBox: {
        flexDirection: 'row',
        borderRadius: 20,
        padding: screenWidth * 0.05,
        justifyContent : 'space-between',
        width: screenWidth * 0.86,
        height: screenHeight*0.1,
        alignItems: 'center',
        marginLeft: screenWidth * 0.07,
        backgroundColor: 'white',
    },
    featuresBoxText: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    currency: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})