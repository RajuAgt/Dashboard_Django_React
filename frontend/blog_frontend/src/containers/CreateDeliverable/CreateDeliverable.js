import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./CreateDeliverable.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Auz from "../../hoc/Auz/Auz";
import * as actions from "../../store/actions/index";
import { checkValidity } from "../../shared/checkValidity";

class CreateDeliverable extends Component {
    state = {
        deliverableCreationForm: {
            deliverableName: {
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
            deliverableBody: {
                elementType: "textarea",
                elementConfig: {
                    type: "textarea",
                    placeholder: "Deliverable"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isDeliverableCreationFormValid: false
    };

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedDeliverableCreationForm = {
            ...this.state.deliverableCreationForm
        };
        const updatedFormElement = {
            ...this.state.deliverableCreationForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedDeliverableCreationForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedDeliverableCreationForm) {
            isFormValid =
                updatedDeliverableCreationForm[inputIndentifier].valid &&
                isFormValid;
        }
        this.setState({
            deliverableCreationForm: updatedDeliverableCreationForm,
            isDeliverableCreationFormValid: isFormValid
        });
    };

    onFormSubmitHandler = event => {
        event.preventDefault();
        let deliverableData = {};
        for (let key in this.state.deliverableCreationForm) {
            deliverableData[key] = this.state.deliverableCreationForm[key].value;
        }
        this.props.onCreateDeliverable(
            deliverableData,
            this.props.slug,
            this.props.refresh
        );
    };

    render() {
        let formElements = [];
        for (let key in this.state.deliverableCreationForm) {
            formElements.push({
                id: key,
                config: this.state.deliverableCreationForm[key]
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
                    Add A Deliverable
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
                    <Button disabled={!this.state.isDeliverableCreationFormValid}>
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
        loading: state.deliverable.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateDeliverable: (data, slug, refreshFunction) =>
            dispatch(actions.createDeliverable(data, slug, refreshFunction))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateDeliverable);
