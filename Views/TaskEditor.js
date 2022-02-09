import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { tasksStore } from "../src/stores/taskStore";
import { useNavigation } from '@react-navigation/native';

const TaskEditor = ({route}) => {
    const id = route.params
    const item = tasksStore.tasks.find(task => task.id === id)
    const [title, setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.desc)

    const alerta = function () {
        alert('Tarefa Atualizada')
    }

    return (
        <ScrollView style={styles.Wrapper}>
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
            <Pressable style={styles.button}
                onPressIn = {() => tasksStore.updateTask({
                    title, description, id
                })}
                onPressOut = {alerta}
            >
                <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
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
        marginBottom: 30
    },
    icon: {
        color: '#fff'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,

    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default TaskEditor;