import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParams } from "../types";
import Home from "../views/Home";
import Detail from "../views/Detail";

const Stack = createNativeStackNavigator<RootStackParams>()

const routeOptions = {
    headerStyle: {
        backgroundColor: "#274C77"
    },
    headerTitleStyle: {
        color: "#fff"
    }
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={routeOptions} />
                <Stack.Screen name="Detail" component={Detail} options={routeOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes