import React from "react";
import {Link} from "react-router-dom";

const Entete= () => {

    return (
        <>
            <div className="logo">

            </div>
            <nav>
                <Link to={"/acceuil"}>Accueil</Link>

            </nav>
        </>


    )
}

export default Entete