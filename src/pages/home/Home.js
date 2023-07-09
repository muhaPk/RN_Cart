import React, {useEffect} from 'react';

import {Container} from "../../ui/Grid/Container";
import {setItems} from "../../reducers/itemsReducer"

import {useDispatch, useSelector} from "react-redux";
import {styled} from "styled-components";

import {Item} from '../../components/Item';

export const Home = () => {

  const { items } = useSelector((state) => state.items)
  console.log("items", items);

  const dispatch = useDispatch()

  useEffect(() => {

    const newData = []

    for (let n = 0; n < 4; n++) {
      newData.push({
        id: n,
        name: `card ${n}`,
        price: `card ${n}`
      })
    }

    if (!items.length) {
      dispatch(setItems(newData));
    }

  }, [items, dispatch]);

    return (
        <Container>

          <Text>123</Text>
          {items?.map(({name, price}, i) => <Item key={i} name={name} price={price} />)}
        </Container>

    );
}

const Text = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: #eee;
  margin-bottom: 10px;
`;
