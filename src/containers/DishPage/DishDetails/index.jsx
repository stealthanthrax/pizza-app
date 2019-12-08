import React from 'react';

import classes from './DishDetails.css';
import DishIngredients from './DishIngredients';
import DishNutrition from './DishNutrition';

const DishDetails = (props) => {
  function addToCart(title,numberOfPieces,price){
      alert("Added")
//   console.log(title)
    let orders = window.sessionStorage.getItem("orders");
    const app = ["*",title,numberOfPieces,price,"custom"];
    console.log("DishDetails", app);
    if(app)
      window.sessionStorage.setItem("orders",orders? orders+[["*",title,numberOfPieces,price,"custom"]]: [["*",title,numberOfPieces,price,"custom"]])
  }


  return (
  <div className={classes.DishDetails}>
      <div className={classes.ImageContainer}>
        <img src={props.dish.img} alt="01"/>
      </div>
      <div className={classes.InfoContainer}>
        <div className={classes.PurchaseInfoBlock}>
          <div className={classes.InfoCounter}>
            <div onClick={() => props.changeItemsNumber(0)}>
              <span>-</span>
            </div>
            <input type="text" value={props.itemsNumber}/>
            <div onClick={() => props.changeItemsNumber(1)}>
              <span>+</span>
            </div>
          </div>
          <div className={classes.OrderButton} onClick={function() {addToCart(props.title,props.itemsNumber,props.totalPrice)}}>
            Add to Cart
          </div>
          <div className={classes.QuantityInfo}>
            <span>{props.totalPrice}</span>
            <span> ₹</span>
          </div>
        </div>
        {props.dish.nutrition ? <DishNutrition nutrition={props.dish.nutrition}/> : null}
      </div>
    </div>);
};

export default DishDetails;