import { ScrollView, Text, View } from 'react-native';
import { ArrowDownRightIcon, ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import sanityClient from '../../sanity';
import { getFeaturedPost } from '@/constants/SanityQueries';

interface FeaturedRowProps {
  id: number;
  title: string;
  description: string;
  key: any;
}

const restaurantArr = [
  {
    id: 1,
    imgUrl: 'http://links.papareact.com/gn7',
    title: 'Restaurant 1',
    rating: 4.5,
    genre: 'Thai',
    address: 'Address 1',
    shortDescription: 'Short description',
    dishes: [],
    long: null,
    lat: null,
  },
];

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description, key }) => {
  const [restaurantArr, setRestaurantArr] = useState([]);

  useEffect(() => {
    console.log('=== fired ===');

    getRestaurants();
  }, []);

  const getRestaurants = () => {
    sanityClient.fetch(getFeaturedPost, { id }).then((data: any) => {
      setRestaurantArr(data?.restaurants);
    });
  };

  console.log('=== restaurantArr ===', restaurantArr, id);

  return (
    <View key={id}>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={1}
          imgUrl="http://links.papareact.com/gn7"
          title="Restaurant 1"
          rating={4.5}
          genre="Thai"
          address="Address 1"
          shortDescription="Short description"
          dishes={[]}
          long={10}
          lat={20}
        />
        <RestaurantCard
          id={1}
          imgUrl="http://links.papareact.com/gn7"
          title="Restaurant 1"
          rating={4.5}
          genre="Thai"
          address="Address 1"
          shortDescription="Short description"
          dishes={[]}
          long={10}
          lat={20}
        />
        <RestaurantCard
          id={1}
          imgUrl="http://links.papareact.com/gn7"
          title="Restaurant 1"
          rating={4.5}
          genre="Thai"
          address="Address 1"
          shortDescription="Short description"
          dishes={[]}
          long={10}
          lat={20}
        />
        <RestaurantCard
          id={1}
          imgUrl="http://links.papareact.com/gn7"
          title="Restaurant 1"
          rating={4.5}
          genre="Thai"
          address="Address 1"
          shortDescription="Short description"
          dishes={[]}
          long={10}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
