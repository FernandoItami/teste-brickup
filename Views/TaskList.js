import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Observer } from 'mobx-react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { tasksStore } from '../src/stores/taskStore';
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';


const TaskList = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Observer>{() => 
          <ScrollView style={styles.itemList}>
            {tasksStore.tasks.map((item) => (
              <View key={item.id} style={styles.item}>
                <View style={styles.iLeft}>
                  <View style={styles.circle}></View>
                  <Text style={styles.itemTitle}>{item.date} - {item.title}</Text>
                </View>
                <View style={styles.iconsWrapper}>
                  <Pressable onPress={() => navigation.navigate('Details', item.id)}>
                    <FontAwesomeIcon icon={ faEye } size={30} style={styles.icon}/>
                  </Pressable >
                  <FontAwesomeIcon icon={ faEdit } size={30} style={styles.icon}/>
                  <Pressable onPress={() => tasksStore.deleteTask(item.id)}>
                    <FontAwesomeIcon icon={ faTrashAlt } size={30} style={styles.icon}/>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        }</Observer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ef8354',
    marginBottom: 20
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  circle:{
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    opacity: 0.4,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTitle:{
    maxWidth: '90%',
    fontSize: 15,
  },
  iconsWrapper:{
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon:{
    color:'gray'
  }
});

export default TaskList;