// src/components/HomeScreen.js

import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync();
  
    console.log("Image Picker Result:", result); // Log the entire result
  
    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri; // Access the URI from the first asset
      console.log("Selected image URI:", uri); // Log the URI
      setSelectedImage(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Image Modifier</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      
      {selectedImage && (
        <Image 
          source={{ uri: selectedImage }} 
          style={styles.image} 
        />
      )}
      
      <Button
        title="Go to Image Modifier"
        onPress={() => navigation.navigate('ImageModifier', { imageUri: selectedImage })}
        disabled={!selectedImage}
      />
    </View>
  );
};

export default HomeScreen;