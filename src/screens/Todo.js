import React, { useState } from 'react'
import { Container, Header, Content, Form, Item, Input, Icon, Label, Card, Right, CardItem, } from 'native-base';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Alert,
    Dimensions,
    Keyboard
} from 'react-native';

function Todo(props) {

    var d = new Date().toString();
    var width = Dimensions.get('window').width; //full width
    const [text, setText] = useState('');
    const [edit, setEdit] = useState({ edit: false, index: 0 });
    const [todo, setTodo] = useState(['0', '1', '2', '3', '4', '5']);

    const delTodo = (i) => {
        const todos = todo.filter((v, index) => {
            return index !== i
        })
        setEdit({ edit: false, index: 0 })
        setText('')
        setTodo(todos)
        Alert.alert('Successfully Deleted')
        Keyboard.dismiss();
    }

    const editTodo = (v, i) => {
        setEdit({ edit: true, index: i })
        setText(v)
    }

    const addTodo = () => {
        Keyboard.dismiss();
        setTodo([...todo, text])
        setText('')
        Alert.alert('Successfully Added')
    }

    const updateTodo = () => {
        console.log(edit.index)
        todo[edit.index] = text
        setTodo(todo)
        setText('')
        Alert.alert('Successfully Updated')
    }

    return (
        <View style={styles.view}>
            <Text style={{ padding: 10, fontSize: 42, fontWeight: 'bold', fontFamily: 'Piedra-Regular' }}>Todo</Text>

            <Item floatingLabel style={styles.input} >
                <Label >What do you want do today?</Label>
                <Input onChangeText={value => { setText(value) }} value={text} />

                {edit.edit ?
                    <Icon name='edit' type="MaterialIcons" style={{ fontSize: 30, padding: 8, marginBottom: 5, backgroundColor: 'blue', color: 'white' }} onPress={updateTodo} />
                    :
                    <Icon name='add' type="MaterialIcons" style={{ fontSize: 30, padding: 8, marginBottom: 5, backgroundColor: 'blue', color: 'white' }} onPress={addTodo} />
                }
            </Item>

            <ScrollView style={{ marginTop: 25, marginBottom: 55 }}>
                {todo.map((v, i) => {
                    return (
                        <Card style={{ width: width - 20, }} key={i}>
                            <TouchableOpacity >
                                <CardItem  >
                                    <Icon type="MaterialIcons" name="chevron-right" style={{ fontSize: 20, fontWeight: 'bold' }} />
                                    <Text style={{ marginRight: 120, }}>{v}</Text>
                                    <Right style={{ position: 'absolute', right: 15, flexDirection: 'row', flexWrap: 'wrap', }}>
                                        <Icon type="MaterialIcons" name="edit" style={{ fontSize: 35, color: 'green', marginRight: 10 }} onPress={() => editTodo(v, i)} />
                                        <Icon type="MaterialIcons" name="delete-forever" style={{ fontSize: 35, color: 'red', }} onPress={() => delTodo(i)} />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    )
                })}
            </ScrollView>

            <Text style={{ position: 'absolute', bottom: 25, fontSize: 18 }}>
                {d}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
    },
    txt: {
        fontSize: 32,
        fontWeight: '600',
        color: "red",
    },
    input: {
        // borderColor: 'black',
        borderWidth: 1.0,
        marginRight: 5,
    },
})

export default Todo