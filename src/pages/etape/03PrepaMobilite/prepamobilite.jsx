import React from "react";

//import
import Header from "../../items/header/header";
import Img from "./imgs/doc.png";
import Img2 from "./imgs/chemin.png";

const PrepaMobilite = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>Préparation de votre mobilité</h1>
                <p>
                    Il est conseillé de faire cette partie même si vous avez pas reçu les résultats de votre candidature. En effet,
                   les procédures sont longues et il est préférable de les commencer le plus tôt possible.
                   <br />
                   Bien que certaines procédures ne peuvent être faites qu'après avoir reçu les résultats de votre candidature.
                   je vais faire en sorte de vous donnez les informations utiles si besoin.
                   <hr />
                </p>
                <h1>Voici les choses importantes à savoir :</h1>
                <img className="img_content" src={Img} alt="" />
                <h2>Note : AVE / VRT et fournit AVEC le permis d'étude (PE)</h2>
                <h1>Chemin logique des procédures à faire</h1>
                <img className="img_content" src={Img2} alt="" />
                <h2>info : vous aurez besoin du CAQ pour le permis d'études, vous pouvez pas faire les deux en même temps, vous devez commencé les procédures du CAQ car le traitement de la demande peut être long.</h2>
            </div>
        </React.StrictMode>
    );
}

export default PrepaMobilite;