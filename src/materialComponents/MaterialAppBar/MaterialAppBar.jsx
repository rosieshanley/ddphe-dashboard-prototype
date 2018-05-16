import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import Menu from "material-ui/Menu";
import IconMenu from "material-ui/Menu";
import MenuItem from "material-ui/Menu";
import IconButton from "material-ui/IconButton";
import MenuIcon from "menu.svg";
import logo from "logo.svg";

const styles = {
  root: {
    flexGrow: 1
  }
};

function MaterialAppBar(props) {
  console.log(IconMenu);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="header" color="primary">
        <div className="header__desktop-container">
          {/* <Button
            component={Link}
            to="/details"
            color="inherit"
            className="header__button"
          >
            Wedding Details
          </Button>
          <Button
            component={Link}
            to="/getting-there"
            color="inherit"
            className="header__button"
          >
            Getting There
          </Button>
          <Button
            component={Link}
            to="/planning"
            color="inherit"
            className="header__button"
          >
            Plan Your Trip
          </Button> */}
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          {/* <Button
            component={Link}
            to="/questions"
            color="inherit"
            className="header__button"
          >
            Questions?
          </Button>
          <Button
            component={Link}
            to="/registry"
            color="inherit"
            className="header__button"
          >
            Registry
          </Button>
          <Button
            component={Link}
            to="/rsvp"
            color="inherit"
            className="header__button"
          >
            RSVP
          </Button>
        </div>
        <div className="header__mobile-container">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <IconMenu
            iconButtonElement={<IconButton />}
            anchorOrigin={{ horizontal: "left", vertical: "top" }}
            targetOrigin={{ horizontal: "left", vertical: "top" }}
          >
            <MenuItem
              primaryText="Copy & Paste"
              menuItems={[
                <MenuItem primaryText="Cut" />,
                <MenuItem primaryText="Copy" />,
                <MenuItem primaryText="Paste" />
              ]}
            />

            <MenuItem
              primaryText="Case Tools"
              menuItems={[
                <MenuItem primaryText="UPPERCASE" />,
                <MenuItem primaryText="lowercase" />,
                <MenuItem primaryText="CamelCase" />,
                <MenuItem primaryText="Propercase" />
              ]}
            />
            <MenuItem value="Del" primaryText="Delete" />
          </IconMenu> */}
          {/* <Menu>
            <IconMenu
            // open={false}
            // iconButtonElement={
            //   <img src={MenuIcon} className="App-logo" alt="logo" />
            // }
            >
              <MenuItem
                primaryText="Wedding Details"
                color="inherit"
                className="header__button"
              />
              {/* <Button
              component={Link}
              to="/details"
              color="inherit"
              className="header__button"
            >
              Wedding Details
            </Button>
            <Button
              component={Link}
              to="/getting-there"
              color="inherit"
              className="header__button"
            >
              Getting There
            </Button>
            <Button
              component={Link}
              to="/planning"
              color="inherit"
              className="header__button"
            >
              Plan Your Trip
            </Button>
            <Button
              component={Link}
              to="/questions"
              color="inherit"
              className="header__button"
            >
              Questions?
            </Button>
            <Button
              component={Link}
              to="/registry"
              color="inherit"
              className="header__button"
            >
              Registry
            </Button>
            <Button
              component={Link}
              to="/rsvp"
              color="inherit"
              className="header__button"
            >
              RSVP
            </Button>
            </IconMenu>
          </Menu> */}
        </div>
      </AppBar>
    </div>
  );
}

MaterialAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialAppBar);
