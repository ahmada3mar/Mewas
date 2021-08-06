import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {View , ScrollView , Text, StyleSheet, Button, Modal, Image} from 'react-native';
import Card from './Card';
import cart from './Img/cart.png'


export default function Cart(props) {
    const [total , setTotal] = useState(0)
    const [modalVisible , setModalVisible] = useState(false)
   
    let totalCart = 0;
    const items =  props.myCart.map(i=> <Card key={'cart'+i.id} products={i} setTotal={setTotal} setMyCart={props.setMyCart}/>)
     
   
     

    useFocusEffect(
        React.useCallback(() => {
            props.myCart.forEach(i=>{
                totalCart += i.price * i.qty
             })
             setTotal(totalCart)
        }, [props.myCart])
      );


    const checkout = ()=>{
        setModalVisible(false)
        props.setMyCart([]);

    }

    if(props.myCart.length == 0 )
        return (
           
                <View style={styles.imgContainer}>
                    <Image source={cart} style={styles.img}/>
                </View>
    
        )  


    return (
        <ScrollView >
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Total price :</Text>
                            <Text style={styles.modalText}>{total * 0.16 + total} JOD</Text>
                            <Button onPress={()=>checkout()} title='checkout' />
                        </View>
                    </View>
                </Modal>
            </View>
            
        <View style={{ padding:10 }}>
            { items }
           <View style={styles.card}>
               <Text style={styles.text}>
                   Total Items : {props.myCart.length ?? 0}
               </Text>
               <Text style={styles.text}>
                   Tax (16%) : {total * 0.16} JOD
               </Text>
               <Text style={styles.text}>
                   Total : {total * 0.16 + total} JOD
               </Text>
               <Button onPress={()=>setModalVisible(true)} title='checkout'/>
           </View>
        </View>          
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      marginBottom: 5,
      width:'100%',
      backgroundColor: 'white',

    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: '100%',
      marginVertical: 10,
      overflow:'hidden',
      
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "#e3e3e3",
        borderRadius: 20,
        height: 150,
        width:'75%',
        justifyContent:'space-around',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
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