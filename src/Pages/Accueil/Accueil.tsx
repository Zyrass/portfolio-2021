// Dépendances
import React from "react"
import styled from "styled-components";

// Composants
import Presentation from "./Presentation/Presentation";

// Styled Components
const StyledDivContainerOdd = styled.div`
  margin-top: 0;
  min-height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props:any) => props.theme.backgroundColor };
`;
const StyledDivContainerEven = styled.div`
  margin-top: 0;
  min-height: calc(50vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #252525;
`;

function Accueil() {
  return(
    <React.Fragment>
      <StyledDivContainerOdd>
        <Presentation />
      </StyledDivContainerOdd>

      {/*  */}
      <StyledDivContainerEven>
        
      </StyledDivContainerEven>

      {/* Contact */}
      <div className="container">
        <h2>Contactez-moi</h2>
          <p>
          Passionné par le développement web, j'aime expérimenter, découvrir et apprendre des nouvelles technologies.<br /><br />
          
          Dans ce portfolio, je vais vous présenter mes compétences, mon parcours ainsi que mes principales intégrations et créations graphiques.<br /><br />
          Pour toute question, n’hésitez pas à me contacter :) 
          </p>

        <div className="container__left" style={{
          backgroundColor: "white"
        }}>

          Vous avez une question, une quelconque remarque ? laissez moi un message je ne mord pas! <br /><br />

          Parlons ensemble de votre projet, je vous apporterais mon expérience et vous donnerais un avis technique sérieux sur les points importants : qualité, coût et délai.

          Je suis dans la région Lyonnaise précisément dans la ville de Meyzieu 69330.
          06 22 63 79 24
          alain.guillon.69330@outlook.fr
        </div>

        <div className="container__right">
          <figure>
            <img src="/images/illustration-contact.png" alt="" />
          </figure>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Accueil
