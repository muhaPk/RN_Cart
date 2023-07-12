import styled from 'styled-components/native';
import { Colors } from '../../consts';

const {backgroundColor, textColor} = Colors

export const Container = styled.View`
  background: ${backgroundColor};
  color: ${textColor};
  height: 100%;
`;
