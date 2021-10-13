import React, { useState } from "react";
import styled from "styled-components";
import { Header, Footer, Slider } from "../components";
import { TextField, Paper, Button, Box } from "@mui/material";
import { IReview } from "../types";
import { SliderType } from "../types";

const WriteReview: React.FC = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [review, setReview] = useState<IReview>({
    id: 0,
    title: "",
    author: "",
    taste: 0,
    texture: 0,
    visualPresentation: 0,
    text: "",
    img: "",
  });

  const onSliderChange = (value: number, type: SliderType) => {
    switch (type) {
      case SliderType.Taste:
        review.taste = value;
        setReview({ ...review });
        break;
      case SliderType.Texture:
        review.texture = value;
        setReview({ ...review });
        break;
      case SliderType.VisualPresentation:
        review.visualPresentation = value;
        setReview({ ...review });
        break;
      default:
        break;
    }
  };

  const saveReview = () => {
    //Should call an api instead of just logging the review
    console.log(review);
    setIsSaved(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    review.text = event.target.value;
    setReview({ ...review });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target!.files![0];

    if (file) {
      review.img = file.name;
      setReview({ ...review });
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    review.title = event.target.value;
    setReview({ ...review });
  };

  return (
    <Root>
      <Header />
      <Container>
        <h1>Write your Review</h1>
        {!isSaved ? (
          <StyledPaper elevation={1}>
            <Slider
              type={SliderType.Taste}
              onChange={onSliderChange}
              title={"Taste"}
            />
            <Slider
              type={SliderType.Texture}
              onChange={onSliderChange}
              title={"Texture"}
            />
            <Slider
              type={SliderType.VisualPresentation}
              onChange={onSliderChange}
              title={"Visual presentation"}
            />
            <PaddedBox pt={1}>
              <FullWidthTextField
                id="outlined-multiline-static"
                label="Title"
                rows={4}
                placeholder="Name your review"
                onChange={handleTitleChange}
              />
            </PaddedBox>
            <PaddedBox pt={1}>
              <FullWidthTextField
                id="outlined-multiline-static"
                label="Review"
                multiline
                rows={4}
                placeholder="Describe your experience"
                onChange={handleTextChange}
              />
            </PaddedBox>
            <Box pb={2}>
              <Button onClick={saveReview} variant="contained">
                Submit review
              </Button>
            </Box>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </Button>
          </StyledPaper>
        ) : (
          <StyledPaper>
            <p>
              Thanks for your submission. If approved it will get added to the
              site.
            </p>
          </StyledPaper>
        )}
      </Container>
      <Footer />
    </Root>
  );
};

export default WriteReview;

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
  padding: 2em;
`;

const FullWidthTextField = styled(TextField)`
  width: 100%;
`;

const PaddedBox = styled(Box)`
  width: 100%;
  margin: 2em 0 2em 0;
`;

const StyledPaper = styled(Paper)`
  padding: 3em;
`;
