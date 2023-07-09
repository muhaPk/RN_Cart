import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import { Container } from "../../ui/Grid/Container";
import { Text } from "../../ui/Grid/Text";
import {Row} from "../../ui/Grid/Row"
import styled from "styled-components/native"
import { CustomButton } from "../../ui/CustomButton";
import { Colors } from "../../consts";
import { TouchableOpacity } from 'react-native';
import {useDispatch} from "react-redux";
import {addCardItems} from '../../reducers/cardReducer'


export const Item = ({route}) => {

    const {data} = useSelector(state => state.items)
    const [item, setItem] = useState(null);
    const [count, setCount] = useState(1);

    const dispatch = useDispatch()

    useEffect(() => {
        if (route?.params?.id) {

            const itemId = route?.params?.id

            const getGroup = data.filter( el => el.id === itemId )[0]
          setItem(getGroup)
        }

    }, [route?.params?.id]);


    if (item === null) {
        return (<Text>Loading..</Text>)
    }


    const addToCart = () => {
      const newItem = {...item, count: count}
      dispatch(addCardItems(newItem))
    }

    const handleCountMinus = () => {
      if (count === 1) {return}
      setCount(count - 1)
    }
    const handleCountPlus = () => setCount(count + 1)

    return (
        <Container>

            <Row>
                <CustomImage
                  source={item?.image}
                />

                <Row direction='column'>
                    <Text>{item?.name}</Text>
                    <Text>price: {item?.price}</Text>
                </Row>

            </Row>

            <Dateils>
                <Text>details: 123</Text>
                <Text>details: 123</Text>
                <Text>details: 123</Text>
            </Dateils>


            <Row justify='center'>
                <CountButton as={TouchableOpacity} onPress={handleCountMinus}><Text>-</Text></CountButton>
                <CountButton><Text>{count}</Text></CountButton>
                <CountButton as={TouchableOpacity} onPress={handleCountPlus}><Text>+</Text></CountButton>
            </Row>

            <CustomButton as={TouchableOpacity} onPress={addToCart} title='Add To Cart' />

        </Container>

    );
}


const {blueColor} = Colors

const CustomImage = styled.Image`
    width: 200px;
    height: 200px;
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
const Dateils = styled.View`
  display: flex;
  flex: 1;
`;
