import { SafeAreaView, Text, View } from 'react-native';

export default function RestaurantScreen({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}: any) {
  return (
    <SafeAreaView className="bg-white pt-5">
      <View>
        <Text>Restaurant Screen</Text>
      </View>
    </SafeAreaView>
  );
}
