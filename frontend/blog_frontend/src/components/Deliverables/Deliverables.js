import React from "react";

import Deliverable from "./Deliverable/Deliverable";
import Auz from "../../hoc/Auz/Auz";

const deliverables = props => {
    return props.deliverablesList.map(deliverable => (
        <Auz key={deliverable.published_on}>
            <Deliverable
                deliverableName={deliverable.deliverableName}
                deliverableBody={deliverable.deliverableBody}
                publishedOn={deliverable.published_on}
            />
        </Auz>
    ));
};

export default deliverables;
