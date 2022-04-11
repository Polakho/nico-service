import React from "react";
import "./form_contact.css"
import {Form, Button, FormCheck} from "react-bootstrap";

const Form_contact: React.FC = () => {

    function sendEmail() {
        


        return undefined;
    }

    return (
        <section>
            <div className={"form-contact"}>
                <div className={"form-contact-entete"}>
                    <h2>Contactez-nous</h2>

                </div>
                <div className={"form-contact-body"}>
                    <p>Prenez contact avec nous à l'aide de ce formulaire, nous vous rappellerons dès que l'on pourra.</p>
                    <Form>
                        <div className={"col-12 row group"}>
                            <Form.Group className={"col-6 "}>
                                <Form.Label htmlFor="name" >Prénom</Form.Label>
                                <Form.Control id={"name"} type={"text"}  placeholder={"Marc"} />
                            </Form.Group>
                            <Form.Group className={"col-6"}>
                                <Form.Label htmlFor="lastname" >Nom</Form.Label>
                                <Form.Control id={"lastname"} type={"text"}  placeholder={"Dubois"} />
                            </Form.Group>
                        </div>
                        <div className={"col-12 row group"}>
                            <Form.Group className={"col-6"}>
                                <Form.Label htmlFor={"telephone"}>Téléphone</Form.Label>
                                <Form.Control id={"telephone"} type={"tel"}  placeholder={"06 ** ** ** **"} />
                            </Form.Group>
                            <Form.Group className={"col-6"}>
                                <Form.Label htmlFor={"mail"}>Émail</Form.Label>
                                <Form.Control id={"email"} type={"mail"}  placeholder={"example@email.com"} />
                            </Form.Group>
                        </div>
                        <div className={"col-12 row group"}>
                            <Form.Group >
                                <Form.Label htmlFor={"message"}>Message</Form.Label>
                                <Form.Control as="textarea" id={"message"}  placeholder={"Décrivez votre projet..."} />
                            </Form.Group>
                        </div>
                        <div className={"col-12 row group"}>
                            <Form.Group>
                                <FormCheck type={"checkbox"} id={"politique-confidentialite"}
                                           label={"En soumettant ce formulaire, j'accepte que les informations saisies soient traitées par Nico-Service"} />
                            </Form.Group>
                        </div>
                       <Button id={"form-contact-send"} variant="primary" onClick={sendEmail()} type="submit">
                        Envoyer
                       </Button>
                    </Form>
                </div>
            </div>
        </section>

    )
}

export default Form_contact