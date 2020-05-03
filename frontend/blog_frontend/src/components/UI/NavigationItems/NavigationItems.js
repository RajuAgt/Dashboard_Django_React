import React from "react";
import { NavLink } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";
import cssClass from "./NavigationItems.css";
import Auz from "../../../hoc/Auz/Auz";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BallotIcon from '@material-ui/icons/Ballot';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fade from '@material-ui/core/Fade';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '100px'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const navigationItems = props => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className={cssClass.NavigationItems}>
            <ul className={cssClass.UnorderList}>
                <span className={cssClass.NavigationItems}>
                    {props.isAuth ? (
                      <Auz>
                      <Button
                        aria-controls="customized-menu" aria-haspopup="true" variant="contained"
                        color="primary" onClick={handleClick}
                      >
                        Menu
                      </Button>

                      <StyledMenu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                      >

                      <StyledMenuItem>
                        <NavLink style={{ textDecoration: "none" }} to="/">
                          <ListItemText primary="Home" />
                        </NavLink>
                      </StyledMenuItem>

                        <StyledMenuItem>
                        <NavLink style={{ textDecoration: "none" }} to="/dashboard" >
                          <ListItemText primary="Dashboard" />
                        </NavLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                        <NavLink style={{ textDecoration: "none" }} to="/projects" >
                          <ListItemText primary="Projects" />
                        </NavLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                        <NavLink style={{ textDecoration: "none" }} to="/login" >
                          <ListItemText primary="Logout" />
                        </NavLink>
                        </StyledMenuItem>

                      </StyledMenu>

                      </Auz>
                    ) : (
                        <Auz>
                            <NavLink style={{ textDecoration: "none" }} to="/login" >
                                <NavigationItem>Login</NavigationItem>
                            </NavLink>

                        </Auz>
                    )}

                </span>
            </ul>
        </div>
    );
};

export default navigationItems;
