import React from 'react';

import classes from './Footer.css';

const Footer = () => (
  <div className={classes.Footer}>
    <div className={classes.FooterLogo}>
      <img src="/img/logo.png" alt="03"/>
      <p>We make moments special!</p>
    </div>
    <div className={classes.FooterPhones}>
      <p>(048) 781-9-555</p>
      <p>(048) 781-9-555</p>
      <p>(048) 781-9-555</p>
      <p>(048) 781-9-555</p>
    </div>
    <div className={classes.FooterMenu}>
      <a href="/">About Us</a>
      <a href="/">Payments and Delivery</a>
      <a href="/">Contact</a>
      <a></a>
      <a></a>
      <a></a>
      <a></a>
    </div>
    <div className={classes.FooterInfo}>
      <p>24 hour food Delivery</p>
      <p>Free Delivery from 20$</p>
      <p>Minimum Order 20$</p>
    </div>
  </div>
);

export default Footer;
