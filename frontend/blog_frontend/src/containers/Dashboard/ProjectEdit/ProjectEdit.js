import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./ProjectEdit.css";
import AxiosInstance from "../../../AxiosInstance";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Aux from "../../../hoc/Aux/Aux";
import * as actions from "../../../store/actions/index";
import { checkValidity } from "../../../shared/checkValidity";

class ProjectEdit extends Component {
    state = {
        projectEditForm: null,
        isProjectEditFormValid: true
    };

    componentWillMount() {
        AxiosInstance.get(
            "/projects/view/" + this.props.match.params.slug + "/"
        ).then(response => {
            this.setState({
                projectEditForm: {
                    title: {
                        elementType: "input",
                        elementConfig: {
                            type: "input",
                            placeholder: "Title Of The Project"
                        },
                        value: response.data.title,
                        validation: {
                            required: true,
                            minLength: 0
                        },
                        valid: true,
                        touched: true
                    },
                    body: {
                        elementType: "textarea",
                        elementConfig: {
                            type: "textarea",
                            placeholder: "Body Of The Project"
                        },
                        value: response.data.body,
                        validation: {
                            required: true,
                            minLength: 0
                        },
                        valid: true,
                        touched: true
                    },
                    short_description: {
                        elementType: "input",
                        elementConfig: {
                            type: "input",
                            placeholder: "Short Description Of The Project"
                        },
                        value: response.data.short_description,
                        validation: {
                            required: true,
                            minLength: 0
                        },
                        valid: true,
                        touched: true
                    }
                }
            });
        });
    }

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedProjectEditForm = {
            ...this.state.projectEditForm
        };
        const updatedFormElement = {
            ...updatedProjectEditForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedProjectEditForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedProjectEditForm) {
            isFormValid =
                updatedProjectEditForm[inputIndentifier].valid && isFormValid;
        }
        this.setState({
            projectEditForm: updatedProjectEditForm,
            isProjectEditFormValid: isFormValid
        });
    };

    onFormSubmitEventHandler = event => {
        event.preventDefault();
        let updatedForm = {};
        for (let key in this.state.projectEditForm) {
            updatedForm[key] = this.state.projectEditForm[key].value;
        }
        updatedForm["slug"] = this.props.match.params.slug;
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };
        this.props.onUserProjectEdit(updatedForm, config);
    };

    render() {
        let formElements = [];
        for (let key in this.state.projectEditForm) {
            formElements.push({
                id: key,
                config: this.state.projectEditForm[key]
            });
        }

        let form = <Spinner />;
        if (this.state.projectEditForm) {
            form = (
                <Aux>
                    <h1
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "200"
                        }}
                    >
                        Edit Project
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
                        <Button disabled={!this.state.isProjectEditFormValid}>
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
        loading: state.user.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUserProjectEdit: (updatedProject, config) =>
            dispatch(actions.userProjectEdit(updatedProject, config))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectEdit);
