import React from "react";
import styled from "styled-components";
import { Image } from "../components";
import { Logo } from "../assets";

const Header: React.FC = () => {
  return (
    <Root>
      <ContainedImage image={Logo} />
      <Title>Burger book</Title>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  background: #976f47;
`;

const ContainedImage = styled(Image)`
  object-fit: contain;
`;

const Title = styled.h1`
  object-fit: contain;
  font-size: 3rem;
  margin: 0.5em;
`;
