import { Form, Formik } from 'formik';
import React from 'react';
import TextField from './TextField';
import * as yup from 'yup';


const FormInscription = () => {
    const pourValider = yup.object({
        nom: yup.string()
            .max(15, 'Maximum 15 caractères pour le nom')
            .required('Ceci est obligatoire !'),
        prenom: yup.string()
            .max(15, 'Maximum 15 caractères pour le prénom')
            .required('Ceci est obligatoire !'),
        email: yup.string()
            .email('Email invalide !')
            .required('Ceci est obligatoire !'),
        motDePasse: yup.string()
            .min(6, 'Minimum 6 caractères requis !')
            .required('Ceci est obligatoire !'),
        confirmMotDePasse: yup.string()
            // fonction pour comparer avec une autre propriété :
            .oneOf([yup.ref('motDePasse'), null], 'Le mot de passe doit être identique !')
            .required('Ceci est obligatoire !'),
    })
    return (
        <Formik
            initialValues={{
                nom: '',
                prenom: '',
                email: '',
                motDePasse: '',
                confirmMotDePasse: ''
            }}
            validationSchema={pourValider}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <section className="container fluid mt-4">
                    <div className="titre row">
                        <h3>Inscrivez-vous</h3>
                    </div>

                    <div className="row">
                        <div className="md-6">
                            <Form>
                                <TextField label="Nom" name="nom" type="text" />
                                <TextField label="Prénom" name="prenom" type="text" />
                                <TextField label="Email" name="email" type="email" />
                                <TextField label="Mot de passe" name="motDePasse" type="password" />
                                <TextField label="Confirmation de mot de passe" name="confirmMotDePasse" type="password" />
                                <div className="boutons">
                                    <button className="btn btn-danger mt-3" type="reset">Reset</button>
                                    <button className="btn btn-success mt-3" type="submit">Valider</button>
                                </div>
                            </Form>

                        </div>

                    </div>

                </section>

            )}
        </Formik>
    );
};

export default FormInscription;