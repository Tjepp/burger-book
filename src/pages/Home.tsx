import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header, Footer, Spinner } from "../components";
import ReviewTeaser from "../components/ReviewTeaser";
import mockData from "../reviews.json";
import { IReview } from "../types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Home: React.FC = () => {
  const [reviews, setReviews] = useState<Array<IReview> | null>(null);

  useEffect(() => {
    //Mocking api call
    setTimeout(() => {
      const data: Array<IReview> = mockData;

      setReviews(data);
    }, 1500);
  }, []);

  return (
    <Root>
      <Header />
      {reviews ? (
        <Box style={{ maxWidth: "1096px" }}>
          <h1>Recent Reviews</h1>
          <Grid container spacing={3} style={{ marginBottom: "2em" }}>
            {mockData.map((r: IReview, i: number) => (
              <Grid item key={i}>
                <ReviewTeaser
                  key={i}
                  title={r.title}
                  tasteRating={r.taste}
                  img={`${window.location.origin + r.img}`}
                  id={r.id}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Spinner />
      )}
      <Footer />
    </Root>
  );
};

export default Home;

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
