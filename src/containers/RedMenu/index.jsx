import React, {Component} from 'react';
import { Link } from "react-router-dom";

import classes from './RedMenu.css';

const CATEGORY_ITEMS = [
  {
    link: '/checkout',
    title: 'Checkout',
    childrenCategory: null
  }
    // }, {
  //   link: '/cuisine/japanese',
  //   title: 'Японская кухня',
  //   childrenCategory: 1
  // }, {
  //   link: '/cuisine/italian',
  //   title: 'Итальянская кухня',
  //   childrenCategory: 2
  // }, {
  //   link: '/cuisine/slavic',
  //   title: 'Славянская кухня',
  //   childrenCategory: 3
  // }, {
  //   link: '/cuisine/bbq',
  //   title: 'Гриль BBQ',
  //   childrenCategory: 4
  // }, {
  //   link: '/menu/kids-menu',
  //   title: 'Детское меню',
  //   childrenCategory: null
  // }, {
  //   link: '/menu/desserts',
  //   title: 'Десерты',
  //   childrenCategory: null
  // }, {
  //   link: '/cuisine/bar',
  //   title: 'Бар',
  //   childrenCategory: 5
  // }
];


export default class RedMenu extends Component {
  state = {
    categoriesItems: [...CATEGORY_ITEMS],
    selectedSubcategory: 1,
    isBlackMenuOpened: false
  };

  mouseOverRedMenuHandler = (childrenCategory) => {
    if (childrenCategory !== null) {
      this.setState({
        isBlackMenuOpened: true,
        selectedSubcategory: childrenCategory
      });
    }
  };

  

  render() {
    const categoryItems = (
      this.state.categoriesItems.map(category => (
        <Link
          key={category.title}
          onMouseOver={() => this.mouseOverRedMenuHandler(category.childrenCategory)}
          onMouseOut={this.mouseOutRedMenuHandler}
          to={category.link}
        >
          {category.title}
        </Link>
      ))
    );
    

    return (
      <div>
        <nav className={classes.RedMenu}>
          {categoryItems}
        </nav>
        <nav
          onMouseOver={this.mouseOverBlackMenuHandler}
          onMouseOut={this.mouseOutRedMenuHandler}
          className={classes.BlackMenu}
          style={{display: this.state.isBlackMenuOpened ? 'block' : 'none'}}
        >
        </nav>
      </div>
    )
  }
}
