import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.Desktop}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
