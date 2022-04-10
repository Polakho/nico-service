import React from "react";

const Form_contact= () => {

    return (
        <div className={"form-contact"}>
            <h2>Contactez-nous</h2>
            <p>Prenez contact avec nous à l'aide de ce formulaire, nous vous rappellerons dès que l'on pourrat</p>
            <form>
                <input id={"name"} type="text" placeholder={"Prénom"}/>
                <input id={"lastname"} type="text" placeholder={"Nom"}/>
                <input id={"telephone"} type="text" placeholder={"Téléphone"}/>
                <input id={"mail"} type="text" placeholder={"Émail"}/>
                <textarea id={"message"}  placeholder={"Message"}/>
                <div className="row">
                    <input id={"politique-confidentialite"} type="checkbox" />
                    <label htmlFor={"politique-confidentialite"} >En soumettant ce formulaire, j'accepte que les informations saisies soient traitées par <strong>Nico-Service</strong></label>
                </div>
                <button>Envoyer</button>
            </form>
        </div>

    )
}

export default Form_contact