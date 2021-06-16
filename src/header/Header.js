import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: "white",
    fontSize: "13px",
    fontWeight: "bold",
    float: "left",
    paddingRight: "20px",
    text: { textAlign: "left" },
    justifyContent: "center",
  },
  logreg: {
    color: "white",
    fontSize: "11px",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    flexGrow: 1,
  },
  img: {
    width: "60px",
    height: "40px",
  },
  div1: {
    flex: 1,
    flexDirection: "row",
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <img className={classes.img} src={logo} alt="logo" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            MTD BANK
          </Typography>
          <Button className={classes.button}>About Us</Button>
          <Button className={classes.button}>Product</Button>
          <Button className={classes.button}>Package</Button>
          <Button className={classes.button}>Contact Us</Button>
          <div className="div1">
            <h1 className={classes.logreg}>Hello</h1>
            <Button className={classes.logreg}>Sign In</Button>
          </div>

          <div className="div1">
            <h1 className={classes.logreg}>New User</h1>
            <Button className={classes.logreg}>Register</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
