import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function Index() {
  return (
    <View className="text-red-500">
      <Text>Tharindu</Text>
      <StatusBar style="auto" />
    </View>
  );
}
