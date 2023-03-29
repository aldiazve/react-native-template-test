import { Button } from 'components';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { ViewsNames } from 'routes';
import { HomeProps } from './types';

export const Home: FC<HomeProps> = ({ navigation }) => {
  const onButtonPress = () => {
    navigation.navigate(ViewsNames.FormExample);
  };

  return (
    <View>
      <Text>Welcome</Text>
      <Button onPress={onButtonPress}>
        <Text>Ir a otra vista</Text>
      </Button>
    </View>
  );
};
