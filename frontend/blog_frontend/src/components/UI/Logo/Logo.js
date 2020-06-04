import React from "react";
import { Link } from "react-router-dom";

import cssClass from "./Logo.css";
import Logo from "./React.png";

const logo = () => (
    <div>
    <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <span className={cssClass.Logo}><img alt='' src={Logo} height="50px"/>&nbsp;
        <img alt='' src="https://static.djangoproject.com/img/logos/django-logo-positive.png" height="40px" padding-top="30px"/>
        <span text-align='center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Gemini & Integration Platform Dashboard</span>
        </span>
    </Link>

    </div>
);

export default logo;
