import React from 'react';
import { useState } from 'react';
import {View , Button , Text , StyleSheet , Image, ToastAndroid } from 'react-native'; 



export default function Card({product, setMyCart}){

    const [qty , setQty] = useState(product.qty ?? 1 );
   
    const addToCart = ()=>{

        const item = {
            ...product,
            qty:qty
        }


        setMyCart(c=>{
            let index = c.findIndex(x=> x.title == item.title);
            if(index !== -1){
                c[index].qty += qty
               return [...c]
            }else{
                return [...c , item]
            }
        })

        ToastAndroid.show("item added succefully", ToastAndroid.SHORT);
          
        setQty(1);
    }

    return(
        <View style={styles.card}>
            <View style={styles.elevation}>
                <Text style={styles.heading}>
                    {product.title}
                </Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Image source={product.image} style={styles.img}/>
                </View>
                <Text style={{ marginVertical:10 }}>
                    {product.desc}
                </Text>
                <View style={styles.action}>
                    <Text style={styles.price}>
                        {product.price * qty} JOD
                    </Text>
                    <View>
                    <View style={{ flexDirection:'row' , flex:1, justifyContent:'center' , paddingVertical:5 }} >
                        <View style={{ flex:1 }}>
                            <Button style={{ flex:2 }} onPress={()=>setQty(q=>q== 1 ? q: q-1)}  title='-'/>
                        </View>
                            <Text style={{ flex:1 , textAlign:'center' , padding:5 }}>
                                {qty}
                            </Text>
                        <View style={{ flex:1 }}>
                            <Button  onPress={()=>setQty(q=>q+1)}  title='+'/>
                        </View>              
                    </View>
                    <Button onPress={addToCart}  title='add to cart'/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: '600',
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
    img:{
        width:'100%',
        height:150
    },
    action:{
        flexDirection:'row' ,
        alignItems:'center' ,
        paddingVertical:5
    },
    price:{
        flex:2,
        fontSize:24,
        color:'green'
    },
    
  });