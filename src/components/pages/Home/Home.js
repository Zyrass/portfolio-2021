import { Fragment } from "react"
import { Navbar } from "../../../utils"

import Presentation from "./section/Presentation"

import "./Home.scss"

const Home = () => {
    return(
        <Fragment>
            <Navbar />
            <div className="container">
                <Presentation />
            </div>
        </Fragment>
    )
}

export default Home