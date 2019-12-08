import React from 'react';
import { Route } from "react-router-dom";

import Aux from '../../hoc/Auxx/Auxx';
import Header from '../Header';
import RedMenu from '../../containers/RedMenu';
import HomePage from '../HomePage';
import MenuPage from '../../containers/MenuPage';
import DishPage from '../../containers/DishPage';
import CheckoutPage from '../../containers/CheckoutPage';
import SuccessfulPage from '../../containers/SuccessfulPage';
import Footer from '../Footer';

const Layout = () => (
  <Aux>
    <Header />
    <RedMenu />
    <Route exact path='/' component={HomePage}/>
    <Route path='/menu/:dishCategory' component={MenuPage}/>
    <Route path='/dish/:category/:title' component={DishPage}/>
    <Route path='/checkout' component={CheckoutPage}/>
    <Route path='/order-successful' component={SuccessfulPage}/>
    <Footer />
  </Aux>
);

export default Layout;