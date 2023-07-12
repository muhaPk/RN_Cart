import React from "react";
import styled from 'styled-components/native';
import { Colors } from '../consts';
import {Row} from '../ui/Grid/Row'
import {ItemData} from "./ItemData"

const {textColor, backgroundColorDark} = Colors

export const Item = ({name, price, image}) => {

  return (
    <Cart as={Row}>
      <ItemData name={name} price={price} image={image} />
    </Cart>
  )
}

const Cart = styled.Text`
  padding: 5px 5px 10px;
  color: ${textColor};
  background: ${backgroundColorDark};
  margin-bottom: 10px;
`;
