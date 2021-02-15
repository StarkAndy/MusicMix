import React from 'react'
import { View, Text,StyleSheet,SafeAreaView ,TextInput,TouchableOpacity} from 'react-native'

const Registration = ({navigation}) => {
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.containerStyle}> 
        <Text style={styles.titleStyle}>Registration</Text>

        <Text style={styles.textStyle}>Contact Number</Text>
            <TextInput placeholder='contact number' 
            style={styles.textInputStyle}
            secureTextEntry={true} 
            keyboardType="decimal-pad"/>
            <Text style={styles.textStyle}>User Name</Text>
               <TextInput placeholder='username' style={styles.textInputStyle} />
            <Text style={styles.textStyle}>Password</Text>
            <TextInput placeholder='password' 
            style={styles.textInputStyle}
            secureTextEntry={true} 
            keyboardType="decimal-pad"/>
            
            <TouchableOpacity style={styles.submitStyle}>
                <Text style={styles.submitTextStyle}>Register</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default Registration;

styles=StyleSheet.create({

    safeAreaStyle : {
        flex:1,
        backgroundColor:'black',
    },

    containerStyle:{
        marginHorizontal:5,
        flex:.5,
        justifyContent:'center',
        marginHorizontal:8,
    
    },
    submitStyle:{
        marginVertical:20,
        paddingVertical:3,
        marginHorizontal:15,
        backgroundColor:'gray',
        borderRadius:7,
        justifyContent:'center',
    
    },
    submitTextStyle: {
        fontSize:20,
        color:'white',
        marginVertical:5,
        textAlign:'center',
     },
    textStyle: {
        marginHorizontal:15,
       fontSize:18,
       color:'white',
       marginVertical:5,
    },
    textInputStyle: {
        marginHorizontal:15,
        paddingHorizontal:7,
        paddingVertical:7,
       fontSize:18,
       marginVertical:5,
       borderRadius:5,
       backgroundColor:'white',
       borderColor:'gray',
       borderWidth:.5,
    },
    titleStyle: {
        marginBottom:25,
        color:'white',
        textAlign:'center',
        fontSize:24,
        marginVertical:5,
     }

});
