import React from "react";
import styled from 'styled-components/native';

export const Item = ({name, price}) => {

  return (
    <Box>
      {name}
      {price}
    </Box>
  )
}

const Box = styled.Text`
  padding: 5px 5px 10px;
`;
