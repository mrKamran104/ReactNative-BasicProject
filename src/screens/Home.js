import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';

function Home(props) {
    return (
        <View style={styles.view}>
            <Text style={styles.txt}>Home</Text>
            <Button title='Go to About' onPress={()=> props.navigation.navigate('About', {name: 'abc'})}/>
            <Button title='Go to About' onPress={()=> props.navigation.navigate('About', {name: 'xyz'})}/>
            <TouchableOpacity activeOpacity={0.8} style={{marginTop:15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical:5}}  onPress={()=> props.navigation.navigate('Contact')}>
                <Text style={{color: 'white'}}>Go to Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{marginTop:15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical:5}}  onPress={()=> props.navigation.navigate('ImageCrop')}>
                <Text style={{color: 'white'}}>Go to Image Picker</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{marginTop:15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical:5}}  onPress={()=> props.navigation.navigate('Todo')}>
                <Text style={{color: 'white'}}>Go to TODO</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{marginTop:15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical:5}}  onPress={()=> props.navigation.navigate('RNCamera')}>
                <Text style={{color: 'white'}}>Go to RNCamera</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{marginTop:15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical:5}}  onPress={()=> props.navigation.navigate('ImagePicker')}>
                <Text style={{color: 'white'}}>Go to ImagePicker</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{marginTop:15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical:5}}  onPress={()=> props.navigation.navigate('HtmlToPdf')}>
                <Text style={{color: 'white'}}>Go to HtmlToPdf</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{marginTop:15, backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical:5}}  onPress={()=> props.navigation.navigate('MapLocation')}>
                <Text style={{color: 'white'}}>Go to MapLocation</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 32,
        fontWeight: '600',
        color: "red",
    },
    
})

export default Home
