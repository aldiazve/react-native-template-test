import { FC, forwardRef } from 'react';
import { Text, TextInput } from 'react-native';
import { InputContainer, StyledInput } from './styles';
import { InputProps } from './types';

export const Input: FC<InputProps> = forwardRef<TextInput, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <InputContainer>
        <Text>{label}</Text>
        <StyledInput {...props} ref={ref} />
      </InputContainer>
    );
  },
);
