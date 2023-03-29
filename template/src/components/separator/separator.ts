import styled from 'styled-components/native';
import {
  SPACING_LG,
  SPACING_M,
  SPACING_S,
  SPACING_SM,
  SPACING_XL,
  SPACING_XS,
  SPACING_XXL,
} from 'theme/spacing';
import { SeparatorProps } from './types';

const separatorMargin = {
  XS: SPACING_XS,
  S: SPACING_S,
  SM: SPACING_SM,
  M: SPACING_M,
  LG: SPACING_LG,
  XL: SPACING_XL,
  XXL: SPACING_XXL,
};

export const VerticalSeparator = styled.View<SeparatorProps>`
  margin-top: ${({ size }) => separatorMargin[size]};
`;

export const HorizontalSeparator = styled.View<SeparatorProps>`
  margin-left: ${({ size }) => separatorMargin[size]};
`;
