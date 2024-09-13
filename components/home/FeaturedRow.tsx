import { Text, View } from 'react-native';
import { ArrowDownRightIcon, ArrowRightIcon } from 'react-native-heroicons/outline';

interface FeaturedRowProps {
  id: number;
  title: string;
  description: string;
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id: number, title, description }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
    </View>
  );
};

export default FeaturedRow;
