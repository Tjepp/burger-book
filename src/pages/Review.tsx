import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IReview } from "../types";
import { Image, Rating, Header, Footer, Spinner } from "../components";
import { useParams } from "react-router-dom";
import mockData from "../reviews.json";

type ReviewParams = {
  id: string;
};

const Review: React.FC = () => {
  const { id } = useParams<ReviewParams>();
  const [review, setReview] = useState<IReview | null>(null);

  useEffect(() => {
    //Mocking api call
    setTimeout(() => {
      setReview(mockData[parseInt(id) - 1]);
    }, 1500);
  }, [id]);

  return (
    <Container>
      <Header />
      {review ? (
        <ReviewContainer>
          <Title>{review.title}</Title>
          <RatingContainer>
            <Rating text={"Taste: "} rating={review.taste} />
            <Rating text={"Texture: "} rating={review.texture} />
            <Rating
              text={"Presentation: "}
              rating={review.visualPresentation}
            />
          </RatingContainer>
          <StyledImage image={review.img}></StyledImage>
          <Author>Written by: {review.author}</Author>
          <p>{review.text}</p>
        </ReviewContainer>
      ) : (
        <Spinner />
      )}
      <Footer />
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Author = styled.p`
  margin: 0;
  margin: 1em 0 0 1em;
`;

const Title = styled.h1`
  margin-top: 1em;
  font-size: 1.6rem;
`;

const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
`;

const ReviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  max-width: 800px;
`;

const RatingContainer = styled.section`
  display: flex;
  gap: 2em;
  margin: 1em;
`;

export default Review;
