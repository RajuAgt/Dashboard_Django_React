import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./CreateRisk.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Auz from "../../hoc/Auz/Auz";
import * as actions from "../../store/actions/index";
import { checkValidity } from "../../shared/checkValidity";

class CreateRisk extends Component {
    state = {
        riskCreationForm: {
            riskName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: "5",
                    maxLength: "20"
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Email (It Will Not Be Revealed)"
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            website: {
                elementType: "input",
                elementConfig: {
                    type: "url",
                    placeholder: "Your Website (Optional)"
                },
                value: "",
                valid: true,
                touched: true
            },
            riskBody: {
                elementType: "textarea",
                elementConfig: {
                    type: "textarea",
                    placeholder: "Risk"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isRiskCreationFormValid: false
    };

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedRiskCreationForm = {
            ...this.state.riskCreationForm
        };
        const updatedFormElement = {
            ...this.state.riskCreationForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedRiskCreationForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedRiskCreationForm) {
            isFormValid =
                updatedRiskCreationForm[inputIndentifier].valid &&
                isFormValid;
        }
        this.setState({
            riskCreationForm: updatedRiskCreationForm,
            isRiskCreationFormValid: isFormValid
        });
    };

    onFormSubmitHandler = event => {
        event.preventDefault();
        let riskData = {};
        for (let key in this.state.riskCreationForm) {
            riskData[key] = this.state.riskCreationForm[key].value;
        }
        this.props.onCreateRisk(
            riskData,
            this.props.slug,
            this.props.refresh
        );
    };

    render() {
        let formElements = [];
        for (let key in this.state.riskCreationForm) {
            formElements.push({
                id: key,
                config: this.state.riskCreationForm[key]
            });
        }

        let form = (
            <Auz>
                <h1
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "200"
                    }}
                >
                    Add A Risk
                </h1>
                <form onSubmit={this.onFormSubmitHandler}>
                    {formElements.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={event =>
                                this.inputChangedHandler(event, formElement.id)
                            }
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                        />
                    ))}
                    <Button disabled={!this.state.isRiskCreationFormValid}>
                        Submit
                    </Button>
                </form>
            </Auz>
        );

        return (
            <Auz>
                <div>
                    {this.props.loading ? (
                        <Spinner />
                    ) : (
                        <div className={cssClass.OuterWrapper}>{form}</div>
                    )}
                </div>
            </Auz>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.risk.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateRisk: (data, slug, refreshFunction) =>
            dispatch(actions.createRisk(data, slug, refreshFunction))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateRisk);
