/*
import {React, useState, useEffect} from 'react'
import {View ,Text, SafeAreaView, FlatList} from 'react-native';
import {StyleSheet, Dimensions, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,MaterialIcons,Feather, Ionicons,Entypo,  FontAwesome } from '@expo/vector-icons'; 



export default function Currency() {
    
    const apiUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';

    // Example: Get the list of available currencies
    fetch(`${apiUrl}/latest/currencies.json`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        // Handle the data (populate dropdown, etc.)
    })
    .catch(error => {
        console.error('Error fetching currency list:', error);
    });

    countries = ["British Pounds", "US Dollar","Euro", "Hong Kong Dollar", "Phillipine Pesos", "Emirates Dirham", "Japan Yen", "South Korea Won"];
    curr = ["gbp", "usd", "eur", "hkd", "php", "aed", "jpy", "krw"]
    const [currency, setCurrency] = useState("hkd");
    const [country, setCountry] = useState("Hong Kong");
    const [select, setSelect] = useState(false);
    const [show, setShow] = useState(true);
    const [amount, setAmount] = useState();


    // Example: Perform currency conversion
    const fromCurrency = 'hkd';
    const toCurrency = 'php';
    fetch(`${apiUrl}/latest/currencies/${fromCurrency}/${toCurrency}.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data.php);
        // Handle the data (display conversion result, etc.)
    })
    .catch(error => {
        console.error('Error performing currency conversion:', error);
    });

    const handleItemClick = (country) => {
        // Handle click event for each item

        console.log(`Clicked on ${country}`);
        setShow(!show)
      };
    
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
          <View style={{ padding: 5, borderBottomWidth: 1, borderBottomColor: '#ccc', height:screenHeight * 0.03 }}>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      );

    

            
    

    return (
        <SafeAreaView style={styles.currency}>
            <View style={styles.currencyButton}>
                <View>
                <Button 
                onPress={() => setShow(!show)} 
                title="Currencies"
                />
                </View>
                <View>
                <TextInput
                    style={styles.input}
                    onChangeText={handleItemClick}
                    value={amount}
                />
                </View>
            
            
            </View>
            
            <View style={styles.currencies}> 
                
                {show && (
                <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                    />)}
            </View>
            <View>
                {(!show) && (
                    <View>
                        <Text style={styles.textShush}>
                            Nainai
                        </Text>
                    </View>
                )

                }
            </View>
                    
         
            
            
        </SafeAreaView>
    )
    

}
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({

    currency:{
        justifyContent: "center",
        alignContent: "center",
    },
    textShush: {fontSize: 100, fontWeight: 'bold', color:'pink'},
    currencies: {
        backgroundColor: 'white',
    },
    currencyButton: {
        flexDirection: "row",
        paddingVertical: screenHeight * 0.01,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor:'black',
        width: screenWidth * 0.7,
    },
    input: {
        borderWidth:'1px',
        backgroundColor:'white',
        width: screenWidth * 0.4,
    }


})
*/
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';

export default function Currency() {
  const apiUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';

  const countries = ["British Pounds", "US Dollar", "Euro", "Hong Kong Dollar", "Phillipine Pesos", "Emirates Dirham", "Japan Yen", "South Korea Won"];
  const currencies = ["gbp", "usd", "eur", "hkd", "php", "aed", "jpy", "krw"];
  const [fromCurrency, setFromCurrency] = useState("hkd");
  const [toCurrency, setToCurrency] = useState("hkd");
  const [showCurrencies, setShowCurrencies] = useState(true);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Example: Perform currency conversion
    if (amount !== "") {
      fetch(`${apiUrl}/latest/currencies/${fromCurrency}/${toCurrency}.json`)
        .then(response => response.json())
        .then(data => {
          setResult(data[toCurrency] * parseFloat(amount));
        })
        .catch(error => {
          console.error('Error performing currency conversion:', error);
        });
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleCurrencyToggle = () => {
    setShowCurrencies(!showCurrencies);
  };

  const handleCurrencySelection = (currency) => {
    setFromCurrency(currency);
    setShowCurrencies(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCurrencySelection(currencies[countries.indexOf(item)])}>
      <View style={styles.currencyItem}>
        <Text style={styles.currencyText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <View style={styles.currencyButton}>
                <Button onPress={handleCurrencyToggle} title="Select Currency" />
                <TextInput
                style={styles.input}
                placeholder="Enter Amount"
                keyboardType="numeric"
                onChangeText={(text) => setAmount(text)}
                value={amount}
                />
                </View>
                
                
                {showCurrencies && (
                    <FlatList
                    data={countries}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                    style={styles.currencyList}
                    />
                )}

                {!showCurrencies && (
                    <View style={styles.resultContainer}>
                    {result !== null && (
                        <Text style={styles.resultText}>
                        {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
                        </Text>
                    )}
                    </View>
                )}
                
            </View>
        
        </TouchableWithoutFeedback>
      
    </SafeAreaView>
  );
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B00A5',
  },
  currencyButton: {
    flexDirection: 'row',
    paddingVertical: screenHeight * 0.01,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: 'black',
    width: screenWidth * 0.8,
    marginVertical: screenHeight * 0.02,
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: screenWidth * 0.4,
    padding: 8,
    borderRadius: 5,
  },
  currencyList: {
    backgroundColor: 'white',
    marginTop: screenHeight * 0.01,
    borderRadius: '7px',
  },
  currencyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: screenHeight * 0.045,
  },
  currencyText: {
    color: '#2B00A5',
  },
  resultContainer: {
    marginTop: screenHeight * 0.02,
  },
  resultText: {
    color: 'white',
    fontSize: 18,
  },
});
