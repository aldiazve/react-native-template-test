import { Button, Input, VerticalSeparator, ViewContainer } from 'components';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { FormContainer } from './styles';
import { ExampleFormData } from './types';

export const SimpleForm: FC = () => {
  const [formData, setFormData] = useState<ExampleFormData>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleFormData>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (data: ExampleFormData) => setFormData(data);

  return (
    <ViewContainer>
      <FormContainer>
        <Text>Basic Form</Text>
        <VerticalSeparator size="XL" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Nombres"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu nombre"
              testID="inp-names"
            />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text testID="txt-firstname-error">Campo requerido.</Text>
        )}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Apellidos"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tus apellidos"
              testID="inp-lastnames"
            />
          )}
          name="lastName"
        />
        <VerticalSeparator size="XL" />
        <Button onPress={handleSubmit(onSubmit)} testID="btn-submit">
          <Text>Submit</Text>
        </Button>
        <VerticalSeparator size="XL" />
        {formData && (
          <View>
            <Text testID="txt-result-names">Nombres: {formData.firstName}</Text>
            <Text testID="txt-result-lastnames">
              Apellidos: {formData.lastName}
            </Text>
          </View>
        )}
      </FormContainer>
    </ViewContainer>
  );
};
