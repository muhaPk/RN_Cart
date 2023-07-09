import React, { useState } from "react";
import styled from 'styled-components/native';
import { Colors } from '../consts';
import {Row} from '../ui/Grid/Row'
import { TouchableOpacity } from "react-native";

const {textColor, backgroundColorDark} = Colors

export const Item = ({name, price, image, isButtons = false}) => {

  const [count, setCount] = useState(1);

  const handleCountMinus = () => {
    if (count === 1) { return }
    setCount(count - 1)
  }
  const handleCountPlus = () => setCount(count + 1)

  return (
    <Card as={Row}>
      <Row>
        <CustomImage
          source={image}
        />
      </Row>
      <Row direction='column'>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </Row>
      {isButtons &&
        <Row as={CountButtons} direction='column'>
          <CountButton as={TouchableOpacity} onPress={handleCountMinus}><Text>-</Text></CountButton>
          <CountButton><Text>{count}</Text></CountButton>
          <CountButton as={TouchableOpacity} onPress={handleCountPlus}><Text>+</Text></CountButton>
        </Row>
      }


    </Card>
  )
}

const {blueColor} = Colors

const Text = styled.Text`
  padding: 5px 5px 10px;
  color: ${textColor};
`;
const Card = styled.Text`
  padding: 5px 5px 10px;
  color: ${textColor};
  background: ${backgroundColorDark};
  margin-bottom: 10px;
`;
const CustomImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-right: 10px;
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
