import { useContext, useEffect } from "react";
import Home from "../Home";
import Login from "../Login";
import UserContext from "../../context/user";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Register from "../Register";

const Tab = createMaterialTopTabNavigator();

export default function Wrapper() {

    const userData = useContext(UserContext);
    return (
        userData.user != null ? <Home /> : 
        <Tab.Navigator 
            screenOptions={{tabBarActiveTintColor: 'darkblue',
            tabBarInactiveTintColor: 'gray', tabBarLabelStyle: { fontSize: 16 } }} >
            <Tab.Screen name="Login" component={Login}/>
            <Tab.Screen name="Register" component={Register}/>
        </Tab.Navigator>
        
    )
}