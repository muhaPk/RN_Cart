import React from 'react';

import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import { Row } from '../ui/Grid/Row';
import { IconButton } from "react-native-paper";

export const Header = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Row justify='space-between'>

                <IconButton
                    onPress={() => { navigation.navigate('Home'); }}
                    // icon="home"
                    iconColor="#000"
                    size={20}
                />


                <IconButton
                    onPress={() => {
                        navigation.navigate('Auth');
                    }}
                    // icon="login"
                    iconColor="#000"
                    size={20}
                />


            </Row>
        </Container>
    );
};




const Container = styled.View`
  padding: 5px;
  background: #4b586d;
  color: #ccc;
`;

const Text = styled.Text`
  color: #eee;
`;

const Image = styled.Image`
  height: 20px;
  width: 20px;
`;

