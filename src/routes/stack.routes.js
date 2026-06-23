
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// IMPORTAR TODAS AS TELAS QUE ESTÃO NO PROJETO
import Menu  from '../screens/Menu';
import Album  from '../screens/Album';
import Descricao  from '../screens/Descricao';
import Mapa  from '../screens/Mapa';
import PontosTuristicos  from '../screens/PontosTuristicos';


const Stack = createStackNavigator();

function App(){
    return ( 
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>   

            {/* FAÇA UM STACK.SCREEN PARA CADA TELA LEMBRANDO QUE A PRIMEIRA TELA DEVE SER A DO MENU  */}
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Album" component={Album} />
            <Stack.Screen name="Descricao" component={Descricao} />
            <Stack.Screen name="Mapa" component={Mapa} />
            <Stack.Screen name="PontosTuristicos" component={PontosTuristicos} />  
    
                     
         
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;



