import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./CreateIssue.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Auz from "../../hoc/Auz/Auz";
import * as issues from "../../store/actions/index";
import { checkValidity } from "../../shared/checkValidity";

class CreateIssue extends Component {
    state = {
        issueCreationForm: {
            issueName: {
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
            issueBody: {
                elementType: "textarea",
                elementConfig: {
                    type: "textarea",
                    placeholder: "Issue"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isIssueCreationFormValid: false
    };

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedIssueCreationForm = {
            ...this.state.issueCreationForm
        };
        const updatedFormElement = {
            ...this.state.issueCreationForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedIssueCreationForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedIssueCreationForm) {
            isFormValid =
                updatedIssueCreationForm[inputIndentifier].valid &&
                isFormValid;
        }
        this.setState({
            issueCreationForm: updatedIssueCreationForm,
            isIssueCreationFormValid: isFormValid
        });
    };

    onFormSubmitHandler = event => {
        event.preventDefault();
        let issueData = {};
        for (let key in this.state.issueCreationForm) {
            issueData[key] = this.state.issueCreationForm[key].value;
        }
        this.props.onCreateIssue(
            issueData,
            this.props.slug,
            this.props.refresh
        );
    };

    render() {
        let formElements = [];
        for (let key in this.state.issueCreationForm) {
            formElements.push({
                id: key,
                config: this.state.issueCreationForm[key]
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
                    Add A Issue
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
                    <Button disabled={!this.state.isIssueCreationFormValid}>
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
        loading: state.issue.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateIssue: (data, slug, refreshFunction) =>
            dispatch(issues.createIssue(data, slug, refreshFunction))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateIssue);
