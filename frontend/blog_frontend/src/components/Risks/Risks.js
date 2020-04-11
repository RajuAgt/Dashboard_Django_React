import React from "react";

import Risk from "./Risk/Risk";
import Auz from "../../hoc/Auz/Auz";

const risks = props => {
    return props.risksList.map(risk => (
        <Auz key={risk.published_on}>
            <Risk
                riskName={risk.riskName}
                riskBody={risk.riskBody}
                publishedOn={risk.published_on}
            />
        </Auz>
    ));
};

export default risks;
