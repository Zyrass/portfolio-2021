// Dépendances
import React, { Fragment } from "react"

// Composants
import Presentation from "./section/Presentation"

// Scss
import "./Home.scss"

function Home() {
  return(
    <Fragment>
      <div className="container">
        <Presentation />
      </div>

      {/* A propos */}
      <div className="container">
        <div className="container__left">
          <h3>Title</h3>
          <p>
          Passionné par le développement web, j'aime expérimenter, découvrir et apprendre des nouvelles technologies.<br /><br />
          
          Dans ce portfolio, je vais vous présenter mes compétences, mon parcours ainsi que mes principales intégrations et créations graphiques.<br /><br />
          Pour toute question, n’hésitez pas à me contacter :) 
          </p>
        </div>
        

        <div className="container__right">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi explicabo, animi, impedit aperiam reiciendis labore libero, odit facere aliquid dolore provident suscipit qui. Sunt, explicabo!</p>
        </div>

        <div className="container__clippath"></div>
      </div>

      {/* Contact */}
      <div className="container">
        <h2>Contactez-moi</h2>

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
            <img src="/images/illustration-contact.png" alt=""x />
          </figure>
        </div>
      </div>

    </Fragment>
  )
}

export default Home
