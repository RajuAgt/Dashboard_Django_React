import React from "react";
import { Link } from "react-router-dom";

import cssClass from "./Logo.css";
import Logo from "./web_logo.jpg";

const logo = () => (
    <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <span className={cssClass.Logo}><img src={Logo} height="30px"/> Project Portfolio</span>
    </Link>
);

export default logo;
