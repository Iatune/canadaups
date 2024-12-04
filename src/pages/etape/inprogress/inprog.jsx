import React from "react";

import Header from "../../items/header/header";

const Inprog = () => {
    return (
        <React.StrictMode>
            <Header />
            <div className="home_info">
                <h1>En cours</h1>
                <p>
                    Cette page est en cours de construction. <br />
                    Merci de votre compréhension. <br />
                    Au pire si vous avez des questions, vous pouvez toujours me contacter. <br />
                    <a href="mailto:yannick.han@universite-paris-saclay.fr">La</a>
                </p>
            </div>
        </React.StrictMode>
    );
};

export default Inprog;
