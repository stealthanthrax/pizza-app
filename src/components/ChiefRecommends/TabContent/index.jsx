import React from 'react';
import {Link} from 'react-router-dom';

import classes from './TabContent.css';
import DishCard from '../../DishCard/index'


const tabContent = (props) => (
  <div className={classes.TabContent}>
    {props.dishes.map((dish,i) => (
      <DishCard
        key={i}
        menuCategory={props.activeCategory}
        dishContent={dish}
      />
    ))}
    
    <Link 
    to={`/menu/${props.activeCategory}`} >
        <div className={classes.TabShowMore}>
          <button>Go To Category</button>
        </div>
    </Link>
  </div>
);

export default tabContent;
