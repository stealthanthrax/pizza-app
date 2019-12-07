import React, {Component} from 'react';

import classes from './CheckoutPage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs';

export default class CheckoutPage extends Component {

  state = {
    order : window.sessionStorage.getItem("orders"),
    isLoading: true
  } 



  componentDidMount() {
    this.setState({order: window.sessionStorage.getItem("orders") })
    
  }

  
  render() {
    let dishesContent = window.sessionStorage.getItem("orders") ? window.sessionStorage.getItem("orders").split("*"): [","];
//      console.log("Hello World", this.state.order);
    let output = [];
    let dic = {};
    
    dishesContent.forEach((i,n)=>{
      if(i) {
        // let x = i.split(",").join()
        let temp = i.split(",")
        temp = temp.filter((i) => {if(i) {return i}})
        console.log(temp)
        if(dic.hasOwnProperty(temp[0]+" "+temp[3] )){
          dic[temp[0]+" "+temp[3]] = parseFloat(dic[temp[0]+" "+temp[3]]) +  parseFloat(temp[2] )
        }
        else {
          dic[temp[0]+" "+temp[3] ] = parseFloat(temp[2])
        }
        
      }
    })
    let total = 0;
      for(let i in dic) {
        output.push(i+" : "+dic[i]);
        total+=dic[i];
      }

    return (
      <div className={classes.Division}>
      <div>
        <Breadcrumbs/>
        <div className={classes.MenuPage} id={classes.left}>
        <h1>Your Order. Total= {total}$</h1>  
          <br />
          <p>{output.map((i,n)=><div key={n}>{i}</div>)}</p>
        </div>
      </div>

      <div>

        <div className={classes.MenuPage} id={classes.right}>
        <br /><br />
        <h1>Enter your Details</h1>  
        <br />
          <label> Your Name :</label>
          <input type="text" placeholder="Your Name"/>
          <br/>
          <br/>
          <label>Phone Number</label>
          <input type="Phone Number" placeholder="Phone Number"/>
          <br/>
          <br/>
          <button >Pay On Delivery</button>
        </div>
      </div>

      </div>

    )
  }
}
