import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import sanityClient from '../../sanity';
import { getCategories } from '@/constants/SanityQueries';

const Category = () => {
  const [categoriesArr, setCategoriesArr] = useState<any>([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    sanityClient.fetch(getCategories).then((data: any) => {
      setCategoriesArr(data);
    });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categoriesArr?.map((item: any, key: any) => {
        return <CategoryCard imgUrl={item?.image} title={item?.name} key={item?._id} />;
      })}
    </ScrollView>
  );
};

export default Category;
