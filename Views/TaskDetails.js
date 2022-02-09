import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { tasksStore } from "../src/stores/taskStore";

const TaskDetails = ({route}) => {
    
    const id = route.params
    const item = tasksStore.tasks.find(task => task.id === id)
    return (
        <View style={styles.Wrapper}>
            <View style={styles.txtWrapper}>
                <Text style={styles.text}>Data: {item.date}</Text>
                <Text style={styles.text}>Tarefa: {item.title}</Text>
                <Text style={styles.text}>Descrição: {item.description}</Text>
            </View>
            <Image source={item.imgData} style={{width: 350, height: 200}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    txtWrapper: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10
    },
    text: {
        fontSize: 25,
        color: 'orange'
    },
});

export default TaskDetails;