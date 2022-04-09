import {Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Admin from "../views/Admin";
import Accueil from "../views/Accueil";
import Entete from "../components/entete/entete";

const Router = () =>  {
    return (
        <>
            <Entete />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/accueil" element={<Accueil />} />

                <Route path={"/admin/"} element={<Admin />}>
                    ça va le faire
                </Route>
            </Routes>
        </>

    )
}

export default Router