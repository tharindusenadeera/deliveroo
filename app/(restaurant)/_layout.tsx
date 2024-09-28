import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function RestaurantLayout() {
  const router = useRouter();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Restaurant" />
    </Stack>
  );
}
