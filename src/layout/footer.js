import React from 'react';
import styled from 'styled-components/native';

import {Row} from '../ui/Grid/Row';
import {useNavigation} from "@react-navigation/native";
import {IconButton} from "react-native-paper";
import { useSelector } from "react-redux";
import {Colors} from "../consts/index"

export const Footer = () => {

  const {count} = useSelector(state => state.cart)

    const navigation = useNavigation();

    return (
        <Container>
            <Row justify="space-between">

                <IconButton
                    onPress={() => { navigation.navigate('Home'); }}
                    icon="home"
                    iconColor="#000"
                    size={20}
                    selected={true}
                />
                <IconButton
                    onPress={() => { navigation.navigate('Cart'); }}
                    icon="cart-outline"
                    iconColor="#000"
                    size={20}
                    selected={true}
                />
            </Row>
          {
            count >= 1 && <Count><Text>{count}</Text></Count>
          }
        </Container>
    );
};


const Container = styled.View`
  position: relative;
  padding: 5px;
  background: #4b586d;
  color: #ccc;
`;
const Count = styled.View`
  position: absolute;
  bottom: 32px;
  right: 8px;
  height: 20px;
  width: 20px;
  border: 1px solid ${Colors.underlineColor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.backgroundColor};
`;
const Text = styled.Text`
  color: #ccc;
  font-size: 10px;
`;
