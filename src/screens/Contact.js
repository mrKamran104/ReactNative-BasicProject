import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button, Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



function Contact({ navigation }) {
    return (
        <View style={styles.view}>
            <Text style={styles.txt}>Contact </Text>
            <Button style={styles.btn} title='Go Back' onPress={() => navigation.goBack()} />
            <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />

            
            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Gallery', headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }, 
                  headerTitle: props => <Image style={{ width: 50, height: 50 }} source={ {uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kissclipart.com%2Freact-logo-transparent-background-clipart-react-co-keqn4y%2F&psig=AOvVaw1SvB0SPbsQsvU1-XjpHaGU&ust=1606544707616000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODW88qLou0CFQAAAAAdAAAAABAD'}} />,
                  headerRight: () => (
                    <TouchableOpacity style={{marginEnd:15}} onPress={() => alert('hello')}  >
                        <Icon style={styles.txt} name={'more-vert'}/>
                    </TouchableOpacity>
                  ),
                })}
            />

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
    },
    btn: {
        marginTop: 15,
        paddingHorizontal: 80
    }
})


export default Contact
