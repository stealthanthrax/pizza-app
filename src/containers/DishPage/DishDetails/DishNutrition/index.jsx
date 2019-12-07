import React from 'react';

import classes from './DishNutrition.css';

const DishNutrition = (props) => (
  <div className={classes.DishNutrition}>
    <div className={classes.NutritionItem}>
      <span>Calories: {props.nutrition.calories}</span>
    </div>
    <div className={classes.NutritionItem}>
      <span>Proteins: {props.nutrition.protein}</span>
    </div>
    <div className={classes.NutritionItem}>
      <span>Fats: {props.nutrition.fats}</span>
    </div>
    <div className={classes.NutritionItem}>
      <span>glicides: {props.nutrition.glicides}</span>
    </div>
  </div>
);

export default DishNutrition;