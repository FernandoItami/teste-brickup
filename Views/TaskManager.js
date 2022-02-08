import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { tasksStore } from "../src/stores/taskStore";
import { useNavigation } from '@react-navigation/native';

const TaskManager = ({route}) => {
    const navigation = useNavigation()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const image = ''
    const clearInput = function () {
        setTitle(''),
        setDescription(''),
        alert('Tarefa Criada')
    }
    return (
        <View style={styles.Wrapper}>
            <TextInput
                style={styles.titleInput}
                placeholder={'Título'}
                value= {title}
                onChangeText={value => setTitle(value)}
            />
            <TextInput
                style={styles.description}
                placeholder={'Descrição'}
                multiline={true}
                value={description}
                onChangeText={value => setDescription(value)}
            />
            <Pressable 
                style={styles.button}
                onPress= {() => navigation.navigate('Camera')}
            >
                <FontAwesomeIcon icon={ faCameraRetro } size={30} style={styles.icon}/>
            </Pressable>
            <Pressable style={styles.button}
                onPressIn = {() => tasksStore.addTask({
                    title, description
                })}
                onPressOut = {clearInput}
            >
                <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleInput: {
        width: '100%',
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 24,
        marginBottom: 20
    },
    description: {
        width: '100%',
        height: 200,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 15,
        fontSize: 24,
        textAlignVertical: 'top',
        marginBottom: 20
    },
    button: {
        width: '100%',
        backgroundColor: '#ef8354',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 150
    },
    icon: {
        color: '#fff'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,

    }
});

export default TaskManager;