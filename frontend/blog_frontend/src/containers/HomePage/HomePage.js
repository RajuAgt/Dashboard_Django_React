import React from "react";
import { Link } from "react-router-dom";

import cssClass from "./HomePage.css";

const HomePage = props => {
    const articleClass = [
        cssClass.center,
        cssClass.mw5,
        cssClass.mw6Ns,
        cssClass.br3,
        cssClass.hidden,
        cssClass.ba,
        cssClass.bBlack10,
        cssClass.mv4
    ];

    const h1Class = [
        cssClass.f4,
        cssClass.bgNearWhite,
        cssClass.br3,
        cssClass.brTop,
        cssClass.Black60,
        cssClass.mv0,
        cssClass.pv2,
        cssClass.ph3,
        cssClass.title
    ];

    const articleDivClass = [cssClass.pa3, cssClass.bt, cssClass.bBlack10];

    const articlePClass = [
        cssClass.f6,
        cssClass.f5Ns,
        cssClass.lhCopy,
        cssClass.measure
    ];

    return (
        <article className={articleClass.join(" ")}>
            <h1 className={h1Class.join(" ")}>Gemini Projects Portfolio</h1>
            <div className={articleDivClass.join(" ")}>
                <p className={articlePClass.join(" ")}>
                Gemini is a suite of online applications used by National Grid and its business associates to manage the transport of gas through pipelines.
                <br/>
                Gemini includes applications for essential gas market processes:
                <br/>
                <ul>
                    <li>Capacity Management</li>
                    <li>Capacity Trading</li>
                    <li>Commercial Balancing</li>
                    <li>Billing</li>
                </ul><br/>
                This Project Portfolio provides updates on the below:
                <br/>
                <ul>
                    <li>Current Gemini Projects orevall status</li>
                    <li>Provide Project-wise Phase status</li>
                    <li>Details on Risks and Issues at Project level</li>
                    <li>Details on Deliverables and Actions at Project level</li>
                </ul><br/>
                
                </p>

                <br />
            </div>
        </article>
    );
};

export default HomePage;
