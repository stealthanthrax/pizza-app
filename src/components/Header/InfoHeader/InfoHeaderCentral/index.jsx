import React from 'react';

import classes from './InfoHeaderCentral.css';
import Aux from '../../../../hoc/Auxx/Auxx';

const InfoHeaderCentral = () => (
  <Aux>
    <div className={classes.InfoCentral}>
      <div className={classes.InfoDiscount}>
        <p className={classes.StrongText}>10% Discount</p>
        <p className={classes.ItalicText}>At Pickup</p>
      </div>
      <div className={classes.InfoDelivery}>
        <p className={classes.StrongText}>Free Shipping</p>
        <p className={classes.ItalicText}>From 20 ₹</p>
      </div>
      <div className={classes.InfoMinimal}>
        <p className={classes.StrongText}>Minimu Order</p>
        <p className={classes.ItalicText}>By Kitchen − 12 ₹</p>
        <p className={classes.ItalicText}>By Bar − 15 ₹</p>
      </div>
      <div className={classes.InfoPhones}>
        <div>(048) 781-9-555</div>
        <div>(048) 781-9-555</div>
        <div>(048) 781-9-555</div>
        <div>(048) 781-9-555</div>
      </div>
    </div>
  </Aux>

);

export default InfoHeaderCentral;
