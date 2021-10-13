import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Root>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/Resturants">Resturants</StyledLink>
        <StyledLink to="/WriteReview">Write review</StyledLink>
      </Menu>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1em;
  background: #976f47;
`;

const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1096px;
  align-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
