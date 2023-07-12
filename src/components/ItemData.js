import { Row } from "../ui/Grid/Row";
import React from "react";
import styled from "styled-components/native";
import { Colors } from "../consts";

const {textColor} = Colors

export const ItemData = ({name, image, price}) => {

  return (
    <>
      <Row>
        <CustomImage
          source={image}
        />
      </Row>
      <Row direction='column'>
        <Text>{name}</Text>
        <Text>${price}</Text>
      </Row>
    </>
  )
}

const Text = styled.Text`
  padding: 5px 5px 10px;
  color: ${textColor};
`;
const CustomImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;
