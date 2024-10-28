import React from "react";
import "./header.css";

import Img from "../../../imgs/iut.png";

const Header = () => {
    return (
        <div className="header">
            <img className="img_header" src={Img} alt="" />
        </div>
    );
}

export default Header;
