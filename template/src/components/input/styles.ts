import styled from 'styled-components/native';
import { SPACING_S, SPACING_XS } from 'theme/spacing';

export const InputContainer = styled.View`
  padding: ${SPACING_XS} ${SPACING_S};
  gap: ${SPACING_S};
`;

export const StyledInput = styled.TextInput`
  border-color: #72a276;
  border-radius: 4px;
  border-width: 1px;
  height: 40px;
  padding: ${SPACING_XS} ${SPACING_S};
`;
