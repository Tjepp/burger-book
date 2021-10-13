import React from "react";
import styled from "styled-components";
import { Header, Footer } from "../components";

const Resturants: React.FC = () => {
  return (
    <Root>
      <Header />
      <Container>
        <h1>Here you will find the resturants with the burgers we reviewed</h1>
        <p>Under construction</p>
      </Container>
      <Footer />
    </Root>
  );
};

export default Resturants;

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
`;
