import React, { Fragment, useEffect, useRef } from "react"
import "./Presentation.scss"

import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null)

    useEffect( () => {
        VanillaTilt.init(tilt.current, options);
    }, [options])

    return <div ref={tilt} {...rest} />
}

const Presentation = () => {

    /* 
        {
            reverse:           false,  // reverse the tilt direction
            max:               35,     // max tilt rotation (degrees)
            perspective:       1000,   // Transform perspective, the lower
                                            the more extreme the tilt gets.
            scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
            speed:             300,    // Speed of the enter/exit transition
            transition:        true,   // Set a transition on enter/exit.
            axis:              null,   // What axis should be disabled. Can be 
                                            X or Y.
            reset:             true,   // If the tilt effect has to be reset on 
                                            exit.
            easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on 
                                                enter/exit.
            glare:             false,   // if it should have a "glare" effect
            "max-glare":       1,      // the maximum "glare" opacity 
                                            (1 = 100%, 0.5 = 50%)
            "glare-prerender": false   // false = VanillaTilt creates the glare 
                                            elements for you, otherwise
                                        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
        } 
    */

    const options = {
        scale: 1,
        speed: 1000,
        max: 15,
        glare: true,
        "glare-prerender": false
    }

    return(
        <Fragment>
            <div className="container">
                
                <div className="container__left">
                    <h1>Hello, moi c'est Alain.</h1>
                    <p>
                        En reconversion professionnel, j'ai pour ambition de devenir<br /> <em>un développeur fullstack</em>.<br/><br />Je reste débutant mais à 37 ans et pour mener à bien cette reconversion,<br /><em>je suis inscris sur plusieurs plateformes d'E-learning</em>.<br /><br />
                        Je me forme essentiellement autour de l'écho-système <em>JavaScript</em> avec tout de même une certaine curiosité pour les technologies d'aujourd'hui.
                    </p>
                    <button className="btn">
                        Mes Projets
                    </button>
                    <button className="btn">
                        Services
                    </button>
                </div>

                <div className="container__right">
                    <figure>
                        <Tilt options={options} >
                            <img 
                                src="/images/moi.jpg" 
                                alt="" 
                                // data-tilt 
                                // data-tilt-glare 
                                // data-tilt-max-glare="0.8"
                            />
                        </Tilt>
                    </figure>
                </div>

                <div className="container__clippath"></div>
            </div>
        </Fragment>
    )
}

export default Presentation
