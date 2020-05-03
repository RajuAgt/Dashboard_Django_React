import React from "react";
import { Link } from "react-router-dom";

import cssClass from "./Logo.css";
import Logo from "./web_logo.jpg";
import LogoX from "./xoserve.jpg";

const logo = () => (
    <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <span className={cssClass.Logo}><img src={Logo} height="50px"/>|
        <img src={LogoX} height="25px" padding-bottom="10px"/>
        Gemini & Integration Platform Dashboard</span>
    </Link>
);

export default logo;
