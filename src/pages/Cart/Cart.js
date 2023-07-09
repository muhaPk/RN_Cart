import React, {useEffect} from 'react';

import {Container} from "../../ui/Grid/Container";
import {setItems} from "../../reducers/itemsReducer"
import {Text} from "../../ui/Grid/Text"
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components/native";

import {Item} from '../../components/Item';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';

export const Cart = () => {

  const { data } = useSelector((state) => state.card)

  const dispatch = useDispatch()

  console.log("data", data);

  if (!data.length) {
    return (
      <Container>
        <Text>No data in card</Text>
      </Container>
    )
  }

    const navigation = useNavigation();

    return (
        <Container>

          {data?.map(({id, name, price, image}, i) =>

            <TouchableOpacity key={i} onPress={() => { navigation.navigate('Item', {id: id}); }}>
              <Item
                name={name}
                price={price}
                image={image}
                isButtons={true}
                navigation={navigation}
              />
            </TouchableOpacity>

          )}

        </Container>

    );
}
