import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';





const Drawer = createDrawerNavigator();

export default function App() {
  const [myCart , setMyCart] = React.useState([]);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Products" >
          {()=><Products myCart={myCart} setMyCart={setMyCart} />}
        </Drawer.Screen>
        <Drawer.Screen name="Cart" >
          {()=><Cart  myCart={myCart} setMyCart={setMyCart}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}