import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
import Image from "./Image";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

type ReviewProps = {
  title: string;
  tasteRating: number;
  img: string;
  id: number;
};

const ReviewTeaser: React.FC<ReviewProps> = ({
  title,
  tasteRating,
  img,
  id,
}) => {
  return (
    <Container>
      <Image image={img}></Image>
      <Title>{title}</Title>
      <Rating text={"Taste: "} rating={tasteRating} />
      <Button component={Link} to={`/review/${id}`} variant="contained">
        Read more
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
`;
const Title = styled.h1`
  margin: 0;
`;

export default ReviewTeaser;
