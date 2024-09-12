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
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Title 1" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Title 1" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Title 1" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Title 1" />
    </ScrollView>
  );
};

export default Category;
