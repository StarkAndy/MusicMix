import React, { useState } from 'react';
import {View,Text,} from 'react-native';
import BottomNavigation from './bottomnavigaiton';
import AuthNavigator from '../navigation/auth';

const LaunchScreen=()=>{

    const [isSplashMsgShow,setIsSplashMsgShow]=useState(true);

    const [isLoggedIn,setIsLoggedIn]=useState(false);

    //const [isSplashMsgShow,setIsSplashMsgShow]=useState(true);

 const timeOut=setTimeout(()=>{setIsSplashMsgShow(false),getData},3000);


    splashMessage=()=>{
        return(
            <View style={{flex:1,backgroundColor:'transparent',justifyContent:'center'}}>
            <Text>WELCOME TO MY SPORTIFY APP</Text>
        </View>
        )
    };

    const getData = async () => {
        try {
          const loggedIn = await AsyncStorage.getItem('loggedIn');
    
          console.log('loggedIn Status: ' + loggedIn);
    
          if (value !== null) {
              setIsLoggedIn(true);
            // value previously stored
          }
        } catch (e) {
          // error reading value
        }
      };

    return(
        <>
                { 
                isSplashMsgShow ?
            <View style={{flex:1,backgroundColor:'transparent',justifyContent:'center'}}>
                <Text>WELCOME TO MY SPORTIFY APP</Text>
            </View>: null
            }
            {
                isLoggedIn ?
                <BottomNavigation/> : <AuthNavigator/>
            }
        </>
    
    );
}

export default LaunchScreen;