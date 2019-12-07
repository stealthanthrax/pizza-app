import React from 'react';
import {Link} from "react-router-dom";

import classes from './Breadcrumbs.css';

const BreadCrumbs = () => (
  <ul className={classes.Breadcrumbs}>
    <Link
      to="/"
    >Home</Link>
    <Link
      to="/menu/pizza"
    >Pizza</Link>
  </ul>
);

export default BreadCrumbs;