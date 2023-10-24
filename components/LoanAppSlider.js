import React, { useState } from 'react';
import { Slider, Icon } from 'react-native-elements'; 
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoanAppSlider = () => {
  const [value, setValue] = useState(40000);
  const navigation = useNavigation();
  return (
    <>
    <View style={styles.container}>
        <View style={styles.upperContainer}>
            <Text style={styles.uppertextHeader}>Fast Loan</Text>
            <Text style={styles.upperSubText}>From 40,000 - 300,000</Text>
        </View>
        <View style={{ padding: 5}}>
        <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={300000}
        minimumValue={40000}
        step={10000}
        trackStyle={{ height: 10, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="circle"
              type="font-awesome"
              size={10}
              reverse
              containerStyle={{ bottom: 11, right: 20 , left: -10 }}
              color="#078586"
            />
          ),
        }}
      />
        </View>
    
      <View>
      
      </View>
    </View>
    <TouchableOpacity activeOpacity={0.9} style={styles.buttonStyle} onPress={()=>navigation.navigate('LoanApplicationScreen',value)} >
        <Text  style={styles.buttonText}> <Text>Get Loan  {value.toLocaleString()}</Text></Text>
     </TouchableOpacity>
    </>
  );
};

const styles=StyleSheet.create({
    container:{
        height: 160,
        borderWidth: 2,
        borderColor: "#078586",
        justifyContent: 'space-between',
        alignItems: 'stretch',
         margin: 10,
        // padding: 4,
        borderRadius: 10

    },
    upperContainer:{
        backgroundColor: "#078586",
        paddingVertical: 16,
        paddingLeft: 10,
    },
    uppertextHeader:{
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    upperSubText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#078586',
        borderRadius: 10,
        margin: 10,
      },
      buttonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '500',
      },
})

export default LoanAppSlider;