import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./CreateAction.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Auz from "../../hoc/Auz/Auz";
import * as actions from "../../store/actions/index";
import { checkValidity } from "../../shared/checkValidity";

class CreateAction extends Component {
    state = {
        actionCreationForm: {
            actionName: {
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
            actionBody: {
                elementType: "textarea",
                elementConfig: {
                    type: "textarea",
                    placeholder: "Action"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isActionCreationFormValid: false
    };

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedActionCreationForm = {
            ...this.state.actionCreationForm
        };
        const updatedFormElement = {
            ...this.state.actionCreationForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedActionCreationForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedActionCreationForm) {
            isFormValid =
                updatedActionCreationForm[inputIndentifier].valid &&
                isFormValid;
        }
        this.setState({
            actionCreationForm: updatedActionCreationForm,
            isActionCreationFormValid: isFormValid
        });
    };

    onFormSubmitHandler = event => {
        event.preventDefault();
        let actionData = {};
        for (let key in this.state.actionCreationForm) {
            actionData[key] = this.state.actionCreationForm[key].value;
        }
        this.props.onCreateAction(
            actionData,
            this.props.slug,
            this.props.refresh
        );
    };

    render() {
        let formElements = [];
        for (let key in this.state.actionCreationForm) {
            formElements.push({
                id: key,
                config: this.state.actionCreationForm[key]
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
                    Add A Action
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
                    <Button disabled={!this.state.isActionCreationFormValid}>
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
        loading: state.action.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateAction: (data, slug, refreshFunction) =>
            dispatch(actions.createAction(data, slug, refreshFunction))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAction);
