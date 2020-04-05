import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./EditProject.css";
import AxiosInstance from "../../../AxiosInstance";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Aux from "../../../hoc/Aux/Aux";
import * as actions from "../../../store/actions/index";
import { checkValidity } from "../../../shared/checkValidity";

class EditProject extends Component {
    state = {
        editProjectForm: null,
        isEditProjectFormValid: true
    };

    componentDidMount() {
        const config = {
            headers: {
                "Content-Type": "application/json",
                AUTHORIZATION: "JWT " + this.props.token
            }
        };
        AxiosInstance.get(
            "/admin-panel/projects/view/" + this.props.match.params.slug + "/",
            config
        )
            .then(response => {
                this.setState({
                    editProjectForm: {
                        title: {
                            elementType: "input",
                            elementConfig: {
                                type: "text",
                                placeholder: "Title"
                            },
                            validation: {
                                required: true,
                                minLength: 5
                            },
                            value: response.data.title,
                            valid: true,
                            touched: true
                        },
                        body: {
                            elementType: "textarea",
                            elementConfig: {
                                type: "textarea",
                                placeholder: "Body Of The Project"
                            },
                            validation: {
                                required: true,
                                minLength: 5
                            },
                            value: response.data.body,
                            valid: true,
                            touched: true
                        },
                        short_description: {
                            elementType: "input",
                            elementConfig: {
                                type: "text",
                                placeholder: "Short Description"
                            },
                            validation: {
                                required: true
                            },
                            value: response.data.short_description,
                            valid: true,
                            touched: true
                        },
                        slug: {
                            elementType: "input",
                            elementConfig: {
                                type: "text",
                                placeholder: "First Name",
                                readOnly: true
                            },
                            value: response.data.slug,
                            validation: {
                                required: true,
                                minLength: 5
                            },
                            valid: true,
                            touched: true
                        },
                        is_published: {
                            elementType: "checkbox",
                            elementConfig: {
                                type: "checkbox",
                                label: "Published",
                                name: "published",
                                checked: response.data.is_published
                                    ? true
                                    : false
                            },
                            value: response.data.is_published ? true : false,
                            valid: true,
                            touched: true
                        }
                    }
                });
            })
            .catch(error => {
                alert("Something Went Wrong");
            });
    }

    inputChangedHandler = (event, inputIndentifier) => {
        const updatedEditProjectForm = {
            ...this.state.editProjectForm
        };
        const updatedFormElement = {
            ...updatedEditProjectForm[inputIndentifier]
        };
        if (inputIndentifier === "is_published") {
            updatedFormElement.value = !this.state.editProjectForm.is_published
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
        updatedEditProjectForm[inputIndentifier] = updatedFormElement;
        let isFormValid = true;
        for (let inputIndentifier in updatedEditProjectForm) {
            isFormValid =
                updatedEditProjectForm[inputIndentifier].valid && isFormValid;
        }
        this.setState({
            editProjectForm: updatedEditProjectForm,
            isEditProjectFormValid: isFormValid
        });
    };

    onFormSubmitEventHandler = event => {
        event.preventDefault();
        let updatedForm = {};
        for (let key in this.state.editProjectForm) {
            updatedForm[key] = this.state.editProjectForm[key].value;
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
        this.props.onAdminEditProject(config, this.props.match.params.slug);
    };

    render() {
        let formElements = [];
        for (let key in this.state.editProjectForm) {
            formElements.push({
                id: key,
                config: this.state.editProjectForm[key]
            });
        }

        let form = <Spinner />;
        if (this.state.editProjectForm) {
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
                        <Button disabled={!this.state.isEditProjectFormValid}>
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
        loading: state.admin.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdminEditProject: (config, slug) =>
            dispatch(actions.adminEditProject(config, slug))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProject);
