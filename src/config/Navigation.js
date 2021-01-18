import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import ImageCrop from '../screens/ImageCrop';
import Todo from '../screens/Todo';
import RNCamera from '../screens/RNCamera';
import ImagePicker from '../screens/ImagePicker';
import HtmlToPdf from '../screens/HtmlToPdf';
import MapLocation from '../screens/MapLocation';

const Stack = createStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{ title: 'My home', }}/>
        <Stack.Screen name="About" component={About}  options={({ route }) => ({ title: route.params.name })}/>
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ImageCrop" component={ImageCrop} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="RNCamera" component={RNCamera} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
        <Stack.Screen name="HtmlToPdf" component={HtmlToPdf} />
        <Stack.Screen name="MapLocation" component={MapLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation