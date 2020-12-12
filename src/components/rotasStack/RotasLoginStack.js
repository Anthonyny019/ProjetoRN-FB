import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import estiloRotasStack from './estiloRotasStack';
import Login from '../../views/Login/Login';
import RotasTab from '../rotasTab/RotasTab';

const Stack = createStackNavigator();

const RotasLoginStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={
                    { cardStyle: estiloRotasStack.screenLogin,
                    headerShown: false, 
                    }
                }                
            />
            <Stack.Screen 
                name="Inicial" 
                component={RotasTab}
                options={
                    { cardStyle: estiloRotasStack.screenInicial,
                    headerShown: false
                    }            
                }               
            />
        </Stack.Navigator>
    );
}

export default RotasLoginStack;