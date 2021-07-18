import BtnGenerateCV from "../BtnGenerateCV/BtnGenerate"
import "./Footer.scss"

const Footer = () => {
  return(
    <footer>

      <div className="container__clippath"></div>

      <div className="container__top">
        <div className="left">
          <h3>Menu rapide</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/projects">Projets</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">A propos</a></li>
            <li><a href="/contact">Contactez-moi</a></li>
          </ul>
        </div>
        
        <div className="middle">
          <h3>Télécharger Mon CV &ndash; ( pdf )</h3>
          <div className="content">
            <p>
              Inspiré d'un CV trouvé sur google,<br/><em>je l'ai ré-écris entièrement en JavaScript</em>.<br /><br />Ainsi, cliquez simplement sur la représentation du CV pour générer celui-ci au format PDF.
            </p>
            <figure>
              <BtnGenerateCV />
            </figure>
          </div>
        </div>

        <div className="right">
          <h3>Remerciements</h3>
          <ul>
            <li>Ma famille</li>
            <li>La famille Vigoureux</li>
            <li>La 3W Academy</li>
            <li>Les communautés sur discord</li>
            <li>Erwan et Quentin sur Dyma.fr</li>
            <li>Les formateurs que j'ai pu avoir</li>
          </ul>
        </div>
      </div>

      <div className="container__bottom">
        <span>&copy; Copyright 2021</span>
        <span>&#128241; 06.22.63.79.24</span>
        <span>
            <a
              href="https://www.linkedin.com/in/alain-guillon-22b3b4b6/"
              target="_blanck"
              className="link"
            >
              <img 
                src="/images/linkedin.png" 
                alt="Icon Github" 
                width="25" 
              />
            </a>

            <a href="https://github.com/Zyrass" target="_blanck" className="link">
              <img 
                src="/images/github.png" 
                alt="Icon Github" 
                width="25" 
              />
            </a>
            <a href="https://gitlab.com/Zyrass" target="_blanck" className="link">
              <img 
                src="/images/gitlab.png" 
                alt="Icon Gitlab" 
                width="25"
                onClick={() => BtnGenerateCV }
              />
            </a>
        </span>
        <span>Mentions Légales</span>
        <span>Codé avec passion <span style={{
            color: "red"
        }}>♥ ♥ ♥</span></span>
      </div>
    </footer>
  )
}


export default Footer