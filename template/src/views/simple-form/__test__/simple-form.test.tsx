import { render, screen, fireEvent } from '@testing-library/react-native';
import { SimpleForm } from '../simple-form';

test('Should show error message if firstName is empty on submit', async () => {
  const expectedErrorMessage = 'Campo requerido.';

  render(<SimpleForm />);

  fireEvent.press(screen.getByTestId('btn-submit'));
  const errorText = await screen.findByTestId('txt-firstname-error');
  expect(errorText.children[0]).toBe(expectedErrorMessage);
});

test('Should show formData when form is filled properly', async () => {
  const name = 'Alejo';
  const lastName = 'Díaz';

  render(<SimpleForm />);

  fireEvent.changeText(screen.getByTestId('inp-names'), name);
  fireEvent.changeText(screen.getByTestId('inp-lastnames'), lastName);
  fireEvent.press(screen.getByTestId('btn-submit'));
  const namesText = await screen.findByTestId('txt-result-names');
  const lastnamesText = await screen.findByTestId('txt-result-lastnames');
  expect(`${namesText.children[0]}${namesText.children[1]}`).toBe(
    `Nombres: ${name}`,
  );
  expect(`${lastnamesText.children[0]}${lastnamesText.children[1]}`).toBe(
    `Apellidos: ${lastName}`,
  );
});
