import React from "react";

import cssClass from "./Input.css";
import Auz from "../../../hoc/Auz/Auz";

const input = props => {
    const inputClasses = [];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(cssClass.Invalid);
    }
    switch (props.elementType) {
        case "input":
            inputClasses.push(cssClass.TextField);
            return (
                <input
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
        case "textarea":
            inputClasses.push(cssClass.TextArea);
            return (
                <textarea
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
        case "checkbox":
            inputClasses.push(cssClass.Checkbox);
            return (
                <Auz>
                    <input
                        className={inputClasses.join(" ")}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}
                    />{" "}
                    <span className={cssClass.CheckboxText}>
                        {props.elementConfig.label}
                    </span>
                    <br />
                </Auz>
            );
        default:
            inputClasses.push(cssClass.TextField);
            return (
                <input
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }
};

export default input;
