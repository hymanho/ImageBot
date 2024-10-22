// src/screens/ImageModifierScreen.js

import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageModifierScreen = ({ route }) => {
  const { imageUri } = route.params;

  return (
    <View>
      <Text>Image Modifier Screen</Text>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 300, height: 300 }}
        />
      )}
    </View>
  );
};

export default ImageModifierScreen;