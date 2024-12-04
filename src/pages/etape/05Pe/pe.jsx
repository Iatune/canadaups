import React from "react";
import "./pe.css";

import Header from "../../items/header/header";

import Img from "./imgs/bio.png";

const Pe = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>Permis d'étude</h1>
                <p>
                    tout d'abord, il est important de noter que vous ne pouvez pas faire la demande de permis d'études sans avoir reçu votre CAQ. <br />
                    Ensuite, je vous invite à lire <a href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada/permis-etudes/presenter-demande.html">ce site</a> au cas ou cela change. <br />
                    Je vais uniquement vous accompagner sur les différentes manipulations à faire pour faire votre demande de permis d'études. <br />
                    Sur le site il est précisé d'avoir un LAP (lettre d’attestation provinciale), ce document est compris dans le CAQ si celle ci contient la phrase suivant :
                    « Cette lettre d’attestation confirme que le demandeur a une place dans la part québécoise des demandes de permis d’études ou qu’il en est exempté».
                </p>
            </div>
            <div className="home_info">
                <h1>Présenter une demande</h1>
                <p>
                    Pour faire la demande, vous devez tout d'abord vous inscrire sur <a href="https://portal-portail.apps.cic.gc.ca/signin?lang=fr" target="_blank">le portail IRCC</a> <br />
                    Pour vous inscrire vous avez besoin d'un code invitation, vous le récupérer en vous inscrivant sur <a href="https://ircc.canada.ca/visit-visiter/fr/obtenir-compte-portail-ircc" target="_blank">ce site</a> <br />
                    Une fois inscrit, vous pouvez faire votre demande de permis d'études en suivant les étapes suivantes :
                </p>

                <ul>
                    <li>Connecter vous à votre compte</li>
                    <li>Dans la section "Commencer une demande" cliquer sur "Demander à visiter, étudier, ou travailler au Canada en tant que résident temporaire"</li>
                    <li>Répondre au formulaire</li>

                    <ul>
                        <li>vous devez avoir votre passeport ainsi que votre carte d'identité sous la main</li>
                        <li>Lettre d'admission</li>
                        <li>Certificat d'acceptation (CAQ)</li>
                        <li>justificatif des fonds</li>
                        <li>Ainsi que environs 160€</li>
                    </ul>
                </ul>

                <p>
                    une fois que vous avez tout rempli, vous pouvez envoyer votre demande. <br />
                    Vous recevrez un mail de confirmation de votre demande. <br />
                    Vous devez ensuite attendre 24h pour recevoir un mail vous indiquant que vous devez faire une visite biométrique. <br />
                </p>
            </div>
            <div className="home_info">
                <h1>Données biométriques</h1>
                <p>
                    On vous demandera quelque jour après le dépot de votre dossier vos données biométrique. <br />
                    Pour cela, vous devez vous rendre dans un centre de biométrie. <br />
                    Voici celle qui se trouve en france :
                </p>
                <img className="img_content" src={Img} alt="" />
                <p>
                    Pour prendre rendez-vous <a href="https://visa.vfsglobal.com/fra/fr/can" target="_blank">cliquez ici</a> <br />
                    Puis cliquez sur "prendre rendez-vous maintenant" <br />
                    lors du rendez-vous, vous devez avoir les documents suivants :
                </p>
                <ul>
                    <li>Vous devez avoir votre passeport</li>
                    <li>La lettre de demande de données biométriques</li>
                    <li><a href="../file/consentement.pdf" target="_blank">Lettre de consentement</a></li>
                </ul>

                <p>je suis pas partie plus loin encore.</p>
            </div>
        </React.StrictMode>
    );
};

export default Pe;
