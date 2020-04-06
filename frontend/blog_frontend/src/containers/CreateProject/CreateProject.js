import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./CreateProject.css";
import Auz from "../../hoc/Auz/Auz";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import { checkValidity } from "../../shared/checkValidity";

class CreateProject extends Component {
    state = {
        projectCreationForm: {
            title: {
                elementType: "input",
                elementConfig: {
                    type: "input",
                    placeholder: "Title Of The Project"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false,
                touched: false
            },
            body: {
                elementType: "textarea",
                elementConfig: {
                    type: "textarea",
                    placeholder: "Body Of The Project"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false,
                touched: false
            },
            short_description: {
                elementType: "input",
                elementConfig: {
                    type: "input",
                    placeholder: "Short Description Of The Project"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 200
                },
                valid: false,
                touched: false
            }
        },
        isprojectCreationFormValid: false
    };

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedProjectCreationForm = {
            ...this.state.projectCreationForm
        };
        const updatedFormElement = {
            ...updatedProjectCreationForm[inputIndentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedProjectCreationForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedProjectCreationForm) {
            isFormValid =
                updatedProjectCreationForm[inputIndentifier].valid && isFormValid;
        }
        this.setState({
            projectCreationForm: updatedProjectCreationForm,
            isprojectCreationFormValid: isFormValid
        });
    };

    onFormSubmitEventHandler = event => {
        event.preventDefault();
        const projectData = {
            title: this.state.projectCreationForm.title.value,
            body: this.state.projectCreationForm.body.value,
            short_description: this.state.projectCreationForm.short_description
                .value
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };
        this.props.onCreateNewProject(projectData, config);
    };

    render() {
        let formElements = [];
        for (let key in this.state.projectCreationForm) {
            formElements.push({
                id: key,
                config: this.state.projectCreationForm[key]
            });
        }

        let form = <Spinner />;
        if (this.state.projectCreationForm) {
            form = (
                <Auz>
                    <h1
                        style={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "200"
                        }}
                    >
                        Create A New Project
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
                        <Button disabled={!this.state.isprojectCreationFormValid}>
                            Submit
                        </Button>
                    </form>
                </Auz>
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
        loading: state.project.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateNewProject: (projectData, config) =>
            dispatch(actions.sendNewProjectToServer(projectData, config))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProject);
