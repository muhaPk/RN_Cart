import React from 'react';
import styled from 'styled-components/native';
import {Colors} from "../consts"

export const Header = () => {

    return (
        <Container></Container>
    );
};


const Container = styled.View`
  height: 20px;
  background: ${Colors.backgroundColor};
`;
