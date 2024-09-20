import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Category from '@/components/home/Category';
import FeaturedRow from '@/components/home/FeaturedRow';
import { useEffect, useState } from 'react';
import sanityClient from './../../sanity';

const featuresArr = [
  {
    id: 1,
    title: 'Featured',
    description: 'Paid placements from our partners',
  },
  {
    id: 2,
    title: 'Tasty Discounts',
    description: "Everyone's been enjoying these juicy discounts!",
  },
  {
    id: 3,
    title: 'Offers near you',
    description: 'Why not support your local restaurant tonight',
  },
];

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState<any>([]);

  useEffect(() => {
    fetchFeaturedCategories();
  }, []);

  const fetchFeaturedCategories = () => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
        ...,
        dishes[]->
        }
      }
      `
      )
      .then((data: any) => {
        setFeaturedCategories(data);
      });
  };

  console.log('==== featuredCategories ===', featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'http://links.papareact.com/wru',
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color={'gray'} />
          <TextInput placeholder="Restaurants and Cuisines" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Category />

        {/* Features */}
        {featuredCategories?.map((item: any, key: any) => {
          return <FeaturedRow id={item?._id} title={item?.name} description={item?.shortDescription} key={item?._id} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
