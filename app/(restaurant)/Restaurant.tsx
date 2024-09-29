import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { urlFor } from '@/sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { Colors } from '@/constants/Colors';

export default function RestaurantScreen() {
  const { id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat } = useLocalSearchParams();
  const router = useRouter();

  // Parse the JSON string back to an object
  const parsedImgUrl = imgUrl ? JSON.parse(imgUrl as string) : null;

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: parsedImgUrl?.asset ? urlFor(parsedImgUrl.asset).url() : undefined, // Use the parsed imgUrl here
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color={Colors?.light?.defaultColor} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
