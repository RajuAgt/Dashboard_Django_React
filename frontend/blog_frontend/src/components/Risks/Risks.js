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
                phaseDetected={risk.phaseDetected}
                impact={risk.impact}
                probability={risk.probability}
                owner={risk.owner}
                prjectPhase={risk.prjectPhase}
                mitigation={risk.mitigation}
                impactDate={risk.impactDate}
            />
        </Auz>
    ));
};

export default risks;
