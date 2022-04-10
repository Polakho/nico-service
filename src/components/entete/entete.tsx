import React from "react";
import {Link} from "react-router-dom";
import "./entete.css"

const Entete= () => {

    return (
        <div className={"navbar"}>
            <nav>
                <Link to={"/"}><img src="" alt="logo" id="logo"/></Link>
                <Link to={"/devis"}>Devis</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>
        </div>

    )
}

export default Entete