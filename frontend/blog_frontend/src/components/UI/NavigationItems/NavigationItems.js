import React from "react";
import { NavLink } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";
import cssClass from "./NavigationItems.css";
import Aux from "../../../hoc/Aux/Aux";

const navigationItems = props => {
    return (
        <div className={cssClass.NavigationItems}>
            <ul className={cssClass.UnorderList}>
                <span className={cssClass.NavigationItems}>
                    <NavLink style={{ textDecoration: "none" }} to="/">
                        <NavigationItem>Home</NavigationItem>
                    </NavLink>
                    {props.isAuth ? (
                      <Aux>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/dashboard"
                        >
                            <NavigationItem>Dashboard</NavigationItem>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/projects"
                        >
                            <NavigationItem>Projects</NavigationItem>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/login"
                        >
                            <NavigationItem>Logout</NavigationItem>
                        </NavLink>
                      </Aux>
                    ) : (
                        <Aux>
                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/login"
                            >
                                <NavigationItem>Login</NavigationItem>
                            </NavLink>
                            
                        </Aux>
                    )}
                </span>
            </ul>
        </div>
    );
};

export default navigationItems;
