import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./CreateTask.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Auz from "../../hoc/Auz/Auz";
import * as actions from "../../store/actions/index";
import { checkValidity } from "../../shared/checkValidity";

class CreateTask extends Component {
    state = {
        taskCreationForm: {
            taskName: {
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
            taskBody: {
                elementType: "textarea",
                elementConfig: {
                    type: "textarea",
                    placeholder: "Task"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isTaskCreationFormValid: false
    };

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedTaskCreationForm = {
            ...this.state.taskCreationForm
        };
        const updatedFormElement = {
            ...this.state.taskCreationForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedTaskCreationForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedTaskCreationForm) {
            isFormValid =
                updatedTaskCreationForm[inputIndentifier].valid &&
                isFormValid;
        }
        this.setState({
            taskCreationForm: updatedTaskCreationForm,
            isTaskCreationFormValid: isFormValid
        });
    };

    onFormSubmitHandler = event => {
        event.preventDefault();
        let taskData = {};
        for (let key in this.state.taskCreationForm) {
            taskData[key] = this.state.taskCreationForm[key].value;
        }
        this.props.onCreateTask(
            taskData,
            this.props.slug,
            this.props.refresh
        );
    };

    render() {
        let formElements = [];
        for (let key in this.state.taskCreationForm) {
            formElements.push({
                id: key,
                config: this.state.taskCreationForm[key]
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
                    Add A Task
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
                    <Button disabled={!this.state.isTaskCreationFormValid}>
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
        loading: state.task.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateTask: (data, slug, refreshFunction) =>
            dispatch(actions.createTask(data, slug, refreshFunction))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTask);
