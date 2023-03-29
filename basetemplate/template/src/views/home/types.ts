import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList, ViewsNames } from 'routes';

export type HomeProps = NativeStackScreenProps<
  MainStackParamList,
  ViewsNames.Home
>;
