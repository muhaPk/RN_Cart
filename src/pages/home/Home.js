import React, {useEffect} from 'react';
import {Container} from "../../ui/Grid/Container";
import {setItems} from "../../reducers/itemsReducer"
import {useDispatch, useSelector} from "react-redux";
import {Item} from '../../components/Item';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import {staticData} from '../../assets/data/data'

export const Home = () => {

  const { data } = useSelector((state) => state.items)

  const dispatch = useDispatch()

  useEffect(() => {

    if (!data.length) {
      dispatch(setItems(staticData));
    }

  }, [data, dispatch]);

    const navigation = useNavigation();

    return (
        <Container>

          {data?.map(({id, name, price, image}, i) =>

            <TouchableOpacity key={i} onPress={() => { navigation.navigate('Item', {id: id}); }}>
              <Item
                name={name}
                price={price}
                image={image}
                navigation={navigation}
              />
            </TouchableOpacity>

          )}

        </Container>

    );
}
