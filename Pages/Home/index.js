import React from 'react';
import {View , Button ,Image, StyleSheet} from 'react-native'; 
import welcom from './img/welcom.png'


export default function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <View style={styles.imgContainer}>
                    <Image source={welcom} style={styles.img}/>
                    <View style={{ marginVertical:5 }}>
                         <Button  onPress={() => navigation. navigate('Cart')} title="Go Cart" />
                    </View>
                    <View>
                         <Button onPress={() => navigation. navigate('Products')} title="Go Products" />
                    </View>
                </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
      imgContainer:{
        width:'100%',
        justifyContent:'center',
        height:'100%'
    },
    img:{
        height:'50%',
        width:'100%',
    },
    
    
  });