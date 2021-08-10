// Dépendances
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styleds Components
const StyledFigure = styled.figure`
  width: 500px;
  height: 400px;
  border: 5px solid ${(props: any) => props.theme.backgroundColor};
  margin: 20px 0;
  overflow: hidden;
  box-shadow: 0 0 10px ${(props: any) => props.theme.primary};
`;
const StyledImg = styled.img`
  background-size: cover;
  height: 250px;
  width: 100%;
`;
const StyledFigCaption = styled.figcaption`
  padding: 10px 20px;
  background-color: ${(props: any) => props.theme.primary};
  height: 150px;
  display: flex;
  flex-direction: column;
  letter-spacing: 1.6px;
  font-weight: 500;
`;

function Project(props: any) {
  const { title, cover, describe, link } = props;
  return (
    <StyledFigure>
      <StyledImg src={cover} alt={`cover ${title}`} />
      <StyledFigCaption>
        <p>{describe}</p>
        <Link to={link} rel="noopener noreferrer" target="_blank">
          Voir le projet
        </Link>
      </StyledFigCaption>
    </StyledFigure>
  );
}

export default Project;
