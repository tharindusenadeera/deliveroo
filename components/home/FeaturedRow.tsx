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

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description, key }) => {
  const [restaurantArr, setRestaurantArr] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    sanityClient.fetch(getFeaturedPost, { id }).then((data: any) => {
      setRestaurantArr(data?.restaurants);
    });
  };

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
        {restaurantArr?.map((item: any, key: any) => {
          return (
            <RestaurantCard
              key={item?._id}
              id={item?._id}
              imgUrl={item?.image}
              title={item?.name}
              rating={item?.rating}
              genre={item?.type?.name}
              address={item?.address}
              shortDescription={item?.shortDescription}
              dishes={item?.dishes}
              long={10}
              lat={20}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
