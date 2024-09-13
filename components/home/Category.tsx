import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const cardArr = [
  {
    id: 1,
    url: 'http://links.papareact.com/gn7',
    title: 'Title 1',
  },
  {
    id: 2,
    url: 'http://links.papareact.com/gn7',
    title: 'Title 2',
  },
  {
    id: 3,
    url: 'http://links.papareact.com/gn7',
    title: 'Title 3',
  },
  {
    id: 4,
    url: 'http://links.papareact.com/gn7',
    title: 'Title 4',
  },
  {
    id: 5,
    url: 'http://links.papareact.com/gn7',
    title: 'Title 5',
  },
  {
    id: 6,
    url: 'http://links.papareact.com/gn7',
    title: 'Title 6',
  },
  {
    id: 7,
    url: 'http://links.papareact.com/gn7',
    title: 'Title 7',
  },
];

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
      {cardArr?.map((item: any, key: any) => {
        return <CategoryCard imgUrl={item?.url} title={item?.title} key={key} />;
      })}
    </ScrollView>
  );
};

export default Category;
