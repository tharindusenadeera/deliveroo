import { Text, TouchableOpacity, View } from 'react-native';

export default function DishRow({ id, name, description, price, image, key }: any) {
  return (
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
