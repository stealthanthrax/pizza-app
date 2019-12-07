import React from 'react';
import {Link} from "react-router-dom";

import classes from './InfoHeader.css';
import InfoHeaderCentral from './InfoHeaderCentral';
import InfoBasket from './InfoBasket';

const InfoHeader = () => (
  <div className={classes.InfoHeader}>
    <div className={classes.InfoLogo}>
      <Link to="/">
        <img src="/img/logo.png" alt="logo" width="200px" height="188px"/>
      </Link>
    </div>
    <InfoHeaderCentral />
    <div className={classes.InfoCart}>
      <InfoBasket />
    </div>
  </div>
);

export default InfoHeader;
