import React from 'react';
import {View , ScrollView} from 'react-native'; 
import {Data }  from './Data'
import Card from './Card';

export default function Products(props) {
    return (
      <ScrollView >
        <View style={{ padding:10 }}>
            {Data.map(i=> <Card myCart={props.myCart} key={'product' +i.id} product={i} setMyCart={props.setMyCart} />)}
        </View>          
      </ScrollView>
    );
  }