import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-green-400">Hello Tharindu</Text>
      <StatusBar style="auto" />
    </View>
  );
}
