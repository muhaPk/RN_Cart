import React, { useState } from "react";
import styled from 'styled-components/native';
import { Colors } from '../consts';
import {Row} from '../ui/Grid/Row'
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { incrementCountItem, decrementCountItem } from "../reducers/cartReducer";
import { ItemData } from "./ItemData";

const {textColor, backgroundColorDark} = Colors

export const Cartitem = ({id, name, price, image, count}) => {

  const [countItem, setCountItem] = useState(count);

  const dispatch = useDispatch()


  const handleCountDecrement = () => {
    if (countItem === 1) { return }
    setCountItem(countItem - 1)
    dispatch(decrementCountItem(id))
  }
  const handleCountIncrement = () => {
    setCountItem(countItem + 1)
    dispatch(incrementCountItem(id))
  }

  return (
    <Cart as={Row}>
      <ItemData name={name} price={price} image={image} />

      <Row as={CountButtons} direction='column'>
        <CountButton as={TouchableOpacity} onPress={handleCountDecrement}><Text>-</Text></CountButton>
        <CountButton><Count>{countItem}</Count></CountButton>
        <CountButton as={TouchableOpacity} onPress={handleCountIncrement}><Text>+</Text></CountButton>
      </Row>

    </Cart>
  )
}

const {blueColor} = Colors

const Count = styled.Text`
  padding: 5px 5px 10px;
  color: ${textColor};
  font-size: 12px;
`;
const Text = styled.Text`
  padding: 5px 5px 10px;
  color: ${textColor};
`;
const Cart = styled.Text`
  padding: 5px 5px 10px;
  color: ${textColor};
  background: ${backgroundColorDark};
  margin-bottom: 10px;
`;

const CountButton = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    border: 1px solid ${blueColor};
`;
const CountButtons = styled.View`
    margin-left: auto;
`;
