import React from 'react';
import {Dimensions} from 'react-native'
import { Colors } from '../consts';
import { Footer } from './footer';
import { Header } from './header';
import styled from 'styled-components/native';

export const MainLayout = ({children}) => {

    return (
        <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};

const fullHeight = Dimensions.get('window').height - 100

const Container = styled.View`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${Colors.backgroundColor};
`;
const Main = styled.View`
  min-height: ${fullHeight}px;
  padding: 5px;
`;
