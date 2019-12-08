import React, {Component} from 'react';
import Breadcrumbs from '../../components/UI/Breadcrumbs';

// import './../../../public/img/Successful.png'

export default class CheckoutPage extends Component {

  componentDidMount() {
    window.sessionStorage.clear()
  }

  
  render() {
    return (
      <div>
        <div>
          <Breadcrumbs/>
        </div>
        <div style={{ textAlign:"center" }}>
          <img style={{height:"200px"}} src="/img/Successful.png" alt="Order Successful"/>
          <h2>Order Succcessful</h2>
        </div>
      </div>

    )
  }
}
