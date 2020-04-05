import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./TaskEdit.css";
import AxiosInstance from "../../../AxiosInstance";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Aux from "../../../hoc/Aux/Aux";
import * as actions from "../../../store/actions/index";
import {checkValidity} from "../../../shared/checkValidity";

class EditProject extends Component {
    state = {
        projectTitle: null,
        taskEditForm: null,
        isTaskEditFormValid: true
    };

    componentDidMount() {
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };
        AxiosInstance.get(
            "/admin-panel/tasks/detail/" + this.props.match.params.pk + "/",
            config
        )
            .then(response => {
                this.setState({
                    taskEditForm: {
                        name: {
                            elementType: "input",
                            elementConfig: {
                                type: "text",
                                placeholder: "Name"
                            },
                            validation: {
                                required: true,
                                minLength: 5
                            },
                            value: response.data.name,
                            valid: true,
                            touched: true
                        },
                        email: {
                            elementType: "input",
                            elementConfig: {
                                type: "text",
                                placeholder: "Email"
                            },
                            validation: {
                                required: true,
                                isEmail: 5
                            },
                            value: response.data.email,
                            valid: true,
                            touched: true
                        },
                        website: {
                            elementType: "input",
                            elementConfig: {
                                type: "url",
                                placeholder: "Website"
                            },
                            value: response.data.website,
                            valid: true,
                            touched: true
                        },
                        body: {
                            elementType: "textarea",
                            elementConfig: {
                                type: "textarea",
                                placeholder: "Task"
                            },
                            value: response.data.body,
                            validation: {
                                required: true,
                                minLength: 5
                            },
                            valid: true,
                            touched: true
                        },
                        is_displayed: {
                            elementType: "checkbox",
                            elementConfig: {
                                type: "checkbox",
                                label: "Published",
                                name: "published",
                                checked: response.data.is_displayed
                                    ? true
                                    : false
                            },
                            value: response.data.is_displayed ? true : false,
                            valid: true,
                            touched: true
                        }
                    },
                    projectTitle: response.data.project_title
                });
            })
            .catch(error => {
                alert("Something Went Wrong");
            });
    }

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedTaskEditForm = {
            ...this.state.taskEditForm
        };
        const updatedFormElement = {
            ...updatedTaskEditForm[inputIndentifier]
        };
        if (inputIndentifier === "is_displayed") {
            updatedFormElement.value = !this.state.taskEditForm.is_displayed
                .value;
            updatedFormElement.elementConfig.checked = updatedFormElement.value;
            updatedFormElement.touched = true;
        } else {
            updatedFormElement.value = event.target.value;
            updatedFormElement.valid = checkValidity(
                updatedFormElement.value,
                updatedFormElement.validation
            );
            updatedFormElement.touched = true;
        }
        updatedTaskEditForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedTaskEditForm) {
            isFormValid =
                updatedTaskEditForm[inputIndentifier].valid && isFormValid;
        }
        this.setState({
            taskEditForm: updatedTaskEditForm,
            isTaskEditFormValid: isFormValid
        });
    };

    onFormSubmitEventHandler = event => {
        event.preventDefault();
        let updatedForm = {};
        for (let key in this.state.taskEditForm) {
            updatedForm[key] = this.state.taskEditForm[key].value;
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            },
            data: {
                ...updatedForm
            }
        };
        this.props.onAdminTaskEdit(config, this.props.match.params.pk);
    };

    render() {
        let formElements = [];
        for (let key in this.state.taskEditForm) {
            formElements.push({
                id: key,
                config: this.state.taskEditForm[key]
            });
        }

        let form = <Spinner />;
        if (this.state.taskEditForm) {
            form = (
                <Aux>
                    <h1
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "200"
                        }}
                    >
                        Edit Task On "<strong>{this.state.projectTitle}</strong>"
                    </h1>
                    <form onSubmit={this.onFormSubmitEventHandler}>
                        {formElements.map(formElement => (
                            <Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={event =>
                                    this.inputChangedHandler(
                                        event,
                                        formElement.id
                                    )
                                }
                                invalid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                            />
                        ))}
                        <Button disabled={!this.state.isTaskEditFormValid}>
                            Submit
                        </Button>
                    </form>
                </Aux>
            );
        }
        return this.props.loading ? (
            <Spinner />
        ) : (
            <div className={cssClass.OuterWrapper}>{form}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.task.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdminTaskEdit: (config, pk) =>
            dispatch(actions.adminTaskEdit(config, pk))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProject);
