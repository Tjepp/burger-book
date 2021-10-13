import React from "react";
import styled from "styled-components";

type ImageProps = {
  image: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ image, className }) => {
  return <ImageContainer src={image} className={className} />;
};

const ImageContainer = styled.img`
  width: 100%;
  height: 160px;
  align-self: center;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

export default Image;
