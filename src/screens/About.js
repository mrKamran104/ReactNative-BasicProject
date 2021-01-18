import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

function About({ navigation, route }) {
    return (
        <View style={styles.view}>
            <Text style={styles.txt}>{ route.params.name }'s About </Text>
            <Button style={styles.btn} title='Go Back' onPress={() => navigation.goBack()} />
            <Button style={styles.btn} title='Go Contact' onPress={()=> navigation.navigate('Contact')} />
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
    btn:{
        marginTop: 15,
        paddingHorizontal: 80
    }
})


export default About