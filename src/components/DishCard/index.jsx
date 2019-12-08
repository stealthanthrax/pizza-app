import React from 'react';
import {Link} from "react-router-dom";

import classes from './DishCard.css';

const DishCard = (props) => {
  function getProperUrl(slug) {
    return `/dish/${props.menuCategory}/${slug}`
  }

  const addToCart = (numberOfPieces,title, price) =>{
    let orders = window.sessionStorage.getItem("orders")
    console.log(price)
    window.sessionStorage.setItem("orders", orders ? orders+[["*",title,numberOfPieces,price,"standard"]]: [["*",title,numberOfPieces,price,"standard"]])

    console.log(props,["*",title,numberOfPieces,price,"standard"])
  }

  return (
    <div className={classes.DishCard}>
      <img src={props.dishContent.img} alt="01"/>
      <div className={classes.DishInfo}>
        <Link
          key={props.dishContent.title}
          to={getProperUrl(props.dishContent.slug)}
        >
          <p className={classes.DishTitle}>{props.dishContent.title}</p>
        </Link>
        {props.dishContent.numberOfPieces ? <p>{props.dishContent.numberOfPieces} Pieces</p> : ''}
        <div className={classes.DishAction}>
          <p>{props.dishContent.price} ₹</p>
          <button onClick={function(){ addToCart(props.dishContent.numberOfPieces,props.dishContent.title,props.dishContent.price)} }>Add to Cart</button>
        </div>
        <p className={classes.DishDescription}>
          {props.dishContent.description}
        </p>
      </div>
    </div>
  )
};

export default DishCard;
