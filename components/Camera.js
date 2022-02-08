import React, {PureComponent} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {RNCamera} from 'react-native-camera';

export default class Camera extends PureComponent {  constructor(props) {
  super(props);}
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const uri = data.uri
      this.props.navigation.navigate('Manager', {uri})
    }
  };
render() {
  return (
    <View style={styles.container}>
    <RNCamera 
      ref={ref => {
        this.camera = ref;
      }}
      captureAudio={false}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={this.takePicture}
          style={styles.capture}>
        </TouchableOpacity>
      </View>
    </View>
    );
  }}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#ebebeb",
      padding: 10
    },
    preview: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },
    buttonContainer: {
      flex: 0,
      flexDirection: "row",
      justifyContent: "center"
    },
    capture: {
      flex: 0,
      width: 60,
      height: 60,
      backgroundColor: "#fff",
      borderWidth: 2,
      borderColor: '#ef8354',
      borderRadius: 60,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: "center",
      margin: 20
    },
  });