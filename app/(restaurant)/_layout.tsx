import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function RestaurantLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerLeft: () => <Text onPress={() => router.back()}>Back</Text>,
      }}
    >
      <Stack.Screen name="Restaurant" />
    </Stack>
  );
}
