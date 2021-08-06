import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {View , Button , Text , StyleSheet , Image } from 'react-native'; 



export default function Card({products , setMyCart , setTotal}){

    const [qty , setQty] = useState(1);

    useFocusEffect(
        React.useCallback(() => {
          setQty(products.qty )
        }, [products.qty])
      );

      const addQty = ()=>{
        setQty(q=>q+1)
        setTotal(t=>t+ products.price)
      }
    
      const remQty = ()=>{
        setQty(q=>q== 1 ? q: q-1)
        setTotal(t=>qty== 1 ? t: t-products.price)
      }
    
    return(
        <View style={styles.card}>
          <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={products.image} style={styles.img}/>
                </View>
                <View style={styles.detalisContainer}>
                    <View>
                        <Text style={styles.heading}>
                            {products.title}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.price}>
                          Total :  {products.price * qty}
                        </Text>
                    </View>
                    <View style={{ flexDirection:'row' , flex:1, justifyContent:'center' , paddingVertical:5 }} >
                        <View style={{ flex:1 }}>
                            <Button style={{ flex:2 }} onPress={remQty}  title='-'/>
                        </View>
                            <Text style={{ flex:1 , textAlign:'center' , padding:5 }}>
                                {qty}
                            </Text>
                        <View style={{ flex:1 }}>
                            <Button  onPress={addQty}  title='+'/>
                        </View>              
                    </View>
                    <View style={{ flex:1 }}>
                            <Button color='#d63636'  onPress={()=>setMyCart(c=>c.filter(i=>i.id != products.id))}  title='Remove from cart'/>
                        </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 13,
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
    container:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:15,
    },
    elevation: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.25,
        shadowRadius: 3,
        elevation: 2,
        padding:5
    },
    imgContainer:{
        flex:1,
        justifyContent:'center',
        borderColor:'gray',
        borderWidth:2,
        borderRadius:5,
        height:150
    },
    img:{
        height:'100%',
        width:'100%',
    },
    detalisContainer:{
        flex:2,
        padding:10
    },
    action:{
        flexDirection:'row' ,
        alignItems:'center' ,
        paddingVertical:5
    },
    price:{
        flex:2,
        fontSize:18,
        color:'green'
    },
    
  });