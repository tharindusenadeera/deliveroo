import { urlFor } from '@/sanity';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';

interface RestaurantCard {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: any;
  long: number;
  lat: number;
}

const RestaurantCard: React.FC<RestaurantCard> = ({
  id = null,
  imgUrl = '',
  title = '',
  rating = null,
  genre = '',
  address = '',
  shortDescription = '',
  dishes = [],
  long = null,
  lat = null,
}) => {
  const router = useRouter();
  // console.log('=== imgUrl ===', imgUrl);

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() =>
        router.push({
          pathname: '/Restaurant',
          params: {
            id,
            imgUrl: JSON.stringify(imgUrl),
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes: JSON.stringify(dishes),
            long,
            lat,
          }, // Pass props as query params
        })
      }
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
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
    </TouchableOpacity>
  );
};

export default RestaurantCard;
