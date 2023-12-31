import styled from 'styled-components/native';
import { Colors } from '../../consts';

const {textColor} = Colors

export const Text = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: ${textColor};
`;
