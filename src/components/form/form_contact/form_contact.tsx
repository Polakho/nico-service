import React from "react";
import "./form_contact.css"
import {Form, Button} from "react-bootstrap";

const Form_contact: React.FC = () => {

    return (
        <section>
            <div className={"form-contact"}>
                <div className={"form-contact-entete"}>
                    <h2>Contactez-nous</h2>
                    <hr/>
                </div>
                <div className={"form-contact-body"}>
                    <p>Prenez contact avec nous à l'aide de ce formulaire, nous vous rappellerons dès que l'on pourra.</p>
                    <Form>
                        <div className={"row"}>
                            <label htmlFor="name" >Prénom</label>
                            <input id={"name"} type="text" placeholder={"Prénom"} />
                        </div>
                        <div className={"row"}>
                            <label htmlFor="lastname" >Nom</label>
                            <input id={"lastname"} type="text" placeholder={"Nom"} />
                        </div>
                        <div className={"row"}>
                            <label htmlFor={"telephone"}>Téléphone</label>
                            <input id={"telephone"} type="tel" placeholder={"06XXXXXXXX"} />
                        </div>
                        <div className={"row"}>
                            <label htmlFor={"mail"}>Émail</label>
                            <input id={"mail"} type="email" placeholder={"email@example.com"} />
                        </div>
                        <div className={"row"}>
                            <label htmlFor={"message"}>Message</label>
                            <textarea id={"message"}  placeholder={"Message"} />
                        </div>
                        <div className="row">
                            <input id={"politique-confidentialite"} type="checkbox" />
                            <label htmlFor={"politique-confidentialite"} >En soumettant ce formulaire, j'accepte que les informations saisies soient traitées par <strong>Nico-Service</strong></label>
                        </div>
                        <button id={"form-contact-send"}>Envoyer</button>
                    </Form>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </section>

    )
}

export default Form_contact