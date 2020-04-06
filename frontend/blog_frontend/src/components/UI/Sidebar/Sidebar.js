import React from "react";

import Auz from "../../../hoc/Auz/Auz";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssClass from "./Sidebar.css";
import Logo from "../Logo/Logo";

const sidebar = props => {
    let classes = [cssClass.Sidebar];
    if (props.isSidebarOpen) {
        classes.push(cssClass.Open);
    } else {
        classes.push(cssClass.Close);
    }

    return (
        <Auz>
            <div className={classes.join(" ")} onClick={props.closed} >
                <Logo />
                <NavigationItems isAuth={props.isAuth} />
            </div>
        </Auz>
    );
};

export default sidebar;
