import React from "react";
import {Container} from "../../ui/Grid/Container";
import {useSelector} from "react-redux";
import styled from "styled-components/native";
import {Cartitem} from '../../components/CartItem';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { Row } from "../../ui/Grid/Row";
import { Colors } from "../../consts";
import {Text} from '../../ui/Grid/Text'

export const Cart = () => {

    const { data, total } = useSelector((state) => state.cart)

    if (!data.length) {
      return (
        <Container>
          <Text>Your cart is empty..</Text>
        </Container>
      )
    }

    const navigation = useNavigation();

    return (
        <Container>

          {data?.map(({id, name, price, image, count}, i) =>

            <TouchableOpacity key={i} onPress={() => { navigation.navigate('Item', {id: id}); }}>
              <Cartitem
                id={id}
                name={name}
                price={price}
                image={image}
                count={count}
                navigation={navigation}
              />
            </TouchableOpacity>
          )}

          <Row as={Total} justify='center' align='flex-end'>
            <LargeText>Total: ${total}</LargeText>
          </Row>

        </Container>

    );
}

const {textColor} = Colors

const Total = styled.View`
  display: flex;
  flex: 1;
`;
const LargeText = styled.Text`
  font-size: 24px;
  color: ${textColor};
`;
