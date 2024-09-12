import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Category = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </ScrollView>
  );
};

export default Category;
