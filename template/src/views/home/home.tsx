import { Button, VerticalSeparator, ViewContainer } from 'components';
import { FC } from 'react';
import { Text } from 'react-native';
import { ViewsNames } from 'routes';
import { CenteredView } from './styles';
import { HomeProps } from './types';

export const Home: FC<HomeProps> = ({ navigation }) => {
  const onButtonPress = () => {
    navigation.navigate(ViewsNames.FormExample);
  };

  return (
    <ViewContainer>
      <CenteredView>
        <Text>Welcome</Text>
        <VerticalSeparator size="XL" />
        <Text>React Native Basic Template Model</Text>
        <VerticalSeparator size="SM" />
        <Button onPress={onButtonPress}>
          <Text>Go to react-hook-form example</Text>
        </Button>
      </CenteredView>
    </ViewContainer>
  );
};
