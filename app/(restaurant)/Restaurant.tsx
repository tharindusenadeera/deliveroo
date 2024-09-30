import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { urlFor } from '@/sanity';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { Colors } from '@/constants/Colors';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '@/components/restaurant/DishRow';

export default function RestaurantScreen() {
  const { id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat } = useLocalSearchParams();
  const router = useRouter();

  // Parse the JSON string back to an object
  const parsedImgUrl = imgUrl ? JSON.parse(imgUrl as string) : null;
  const parsedDishes = dishes ? JSON.parse(dishes as string) : [];

  // console.log('=== dishes ===', JSON.stringify(dishes, null, 2));

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: parsedImgUrl?.asset ? urlFor(parsedImgUrl.asset).url() : undefined, // Use the parsed imgUrl here
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity onPress={router.back} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color={Colors?.light?.defaultColor} />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row space-x-1 items-center">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>. {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22} />
          <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
          <ChevronRightIcon color={Colors?.light?.defaultColor} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* {parsedDishes?.map((item: any, key: any) => {
          return (
            <DishRow
              id={item?._id}
              key={item?._id}
              name={item?.name}
              description={item?.shortDescription}
              price={item?.price}
              image={item?.image}
            />
          );
        })} */}
      </View>
    </ScrollView>
  );
}
