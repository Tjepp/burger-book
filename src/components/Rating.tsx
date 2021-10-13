import React from "react";
import styled from "styled-components";

type RatingProps = {
  rating: number;
  text: string;
};

const Rating: React.FC<RatingProps> = ({ text, rating }) => {
  return (
    <Text>
      {text} {rating} / 5
    </Text>
  );
};

const Text = styled.p`
  margin: 0;
`;

export default Rating;
