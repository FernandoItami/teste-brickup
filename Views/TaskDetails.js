import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { tasksStore } from "../src/stores/taskStore";

const TaskDetails = ({route}) => {
    
    const id = route.params
    const item = tasksStore.tasks.find(task => task.id === id)
    return (
        <View style={styles.Wrapper}>
            <View>
                <Text>{item.date}</Text>
            </View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        paddingTop: 40,
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'center',
    }
});

export default TaskDetails;