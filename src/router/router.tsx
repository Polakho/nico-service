import {Routes, Route} from "react-router-dom";
import Admin from "../views/Admin";
import Accueil from "../views/Accueil";
import Contact from "../views/Contact";
import Devis from "../views/Devis";
import Entete from "../components/entete/entete";
import Footer from "../components/footer/footer";

const Router = () =>  {
    return (
        <>
            <Entete />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path={"/devis"} element={<Devis />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/admin/"} element={<Admin />}>
                    ça va le faire
                </Route>
            </Routes>
            <Footer />
        </>

    )
}

export default Router