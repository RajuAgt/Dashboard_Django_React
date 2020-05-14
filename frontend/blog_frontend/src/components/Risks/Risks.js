import React from "react";

import Risk from "./Risk/Risk";
import Auz from "../../hoc/Auz/Auz";

const risks = props => {
    return props.risksList.map(risk => (
        <Auz key={risk.published_on}>
            <Risk
                riskID={risk.riskID}
                riskName={risk.riskName}
                riskBody={risk.riskBody}
                publishedOn={risk.published_on}
                phaseDetected={risk.phaseDetected}
                impact={risk.impact}
                probability={risk.probability}
                riskScore={risk.riskScore}
                owner={risk.owner}
                prjectPhase={risk.prjectPhase}
                mitigation={risk.mitigation}
                impactDate={risk.impactDate}
            />
        </Auz>
    ));
};

export default risks;
