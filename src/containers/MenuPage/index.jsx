import React, {Component} from 'react';

import classes from './MenuPage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import DishCard from '../../components/DishCard';
import axios from "../../axios-delivery";



const INITIAL_STATE = {
  defaultDishesOrder: [],
  currentDishes: [],
  sortBy: 'default',
  currentCategory: '',
  isLoading: true
};

export default class MenuPage extends Component {
  state = {...INITIAL_STATE};

  componentWillMount() {
    this.getCurrentCategory();
  }

  componentWillReceiveProps(nextProps) {
    this.updateDishCategory(nextProps);
  }

  updateDishCategory(nextProps) {
    if (this.props.match.params.dishCategory !== nextProps.match.params.dishCategory) {
      this.getCurrentCategory(nextProps.match.params.dishCategory);
    }
  }

  setDefaultDishes() {
    const menuDishes = this.state.currentDishes.slice();
    this.setState({defaultDishesOrder: menuDishes});
  }

  

  componentDidMount() {
    this.setState({isLoading: true});
    this.getCurrentDishes();
  }

  getCurrentCategory(newProps) {
    let matchingCategory = '';
    newProps ?
      matchingCategory = newProps :
      matchingCategory = this.props.match.params.dishCategory ;
    this.setState({currentCategory: matchingCategory}, () => {
      this.getCurrentDishes();
    });
  }

  getCurrentDishes() {
    let localCategory = this.state.currentCategory;
    let composedUrl = `https://pizza-app-backend.herokuapp.com/dishes/${localCategory}.json`;
    console.log("localCategory",localCategory);
    axios.get(composedUrl)
      .then(response => {
        console.log(response);
        this.setState({currentDishes: Object.keys(response.data).map(i => response.data[i])});
        this.setState({isLoading: false});
        this.setDefaultDishes();
      })
      .catch( error => {
        console.log(error);
      });
  }

  render() {
    let dishesContent = null;
    this.state.isLoading ?
      dishesContent = <div>Loading...</div> :
      dishesContent = (
        <div className={classes.DishesContainer}>
          {this.state.currentDishes.map((dish,i) => (
            <DishCard
              key={i}
              menuCategory={this.state.currentCategory}
              dishContent={dish}
            />
          ))}
        </div>
      );
    return (
      <div className={classes.MenuPage}>
        <Breadcrumbs/>
        {dishesContent}
      </div>
    )
  }
}
