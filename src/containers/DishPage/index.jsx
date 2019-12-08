import React from 'react';

import classes from './DishPage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import DishDetails from './DishDetails';
import axios from "../../axios-delivery";

const INITIAL_STATE = {
  currentDish: {},
  currentTitle: '',
  currentCategory: '',
  numberOfItems: 1,
  priceOfItem: 0,
  totalPrice: 0,
  convertedIngredientArray: [{imgPath: "/img/ingredients/mozarella.jpg", title: "Mozarella"},{imgPath: "/img/ingredients/tomatoes.jpg", title: "Tomatoes"},{imgPath: "/img/ingredients/oregano.jpg", title: "Oregano"},{imgPath: "/img/ingredients/cheese-parmezan.jpg", title: "Cheese Pamesan"},{imgPath: "/img/ingredients/hunter-sausages.jpg", title: "Sausages"},{imgPath: "/img/ingredients/sour-sous.jpg", title: "Sour Sous"}],
  isLoading: false
};

export default class DishPage extends React.Component {
  state = {...INITIAL_STATE};

  componentWillMount() {
    this.getCurrentCategory();
    this.calculateTotalPrice();
  }

  componentDidMount() {
    this.getCurrentDish();
  }

  changeNumberOfItems = (type) => {
    let oldNumberItems = this.state.numberOfItems;
    type ?
      oldNumberItems++ :
      oldNumberItems-- ;
    this.setState({numberOfItems: oldNumberItems}, () => {
      this.calculateTotalPrice();
    });
  };

  calculateTotalPrice() {
    let newPrice = this.state.priceOfItem * this.state.numberOfItems;
    this.setState({totalPrice: newPrice});
  }

  getCurrentCategory() {
    let matchingCategory = this.props.match.params.category;
    let matchingTitle = this.props.match.params.title;
    this.setState({
      currentCategory: matchingCategory,
      currentTitle: matchingTitle
    });
  }

  getCurrentDish() {
    let localCategory = this.state.currentCategory;
    let localTitle = this.state.currentTitle;
    let ingredientArray = [];
    let composedUrl = `https://food-delivery-react.firebaseio.com/dishes/${localCategory}/${localTitle}.json`;
    // console.log(localCategory,localTitle)
    axios.get(composedUrl)
      .then(response => {
        this.setState({currentDish: response.data});
        this.setState({priceOfItem: response.data.price}, () => {
          this.calculateTotalPrice();
        });
        this.setState({isLoading: false});
        this.setState({convertedIngredientArray: ingredientArray});
        // console.log(ingredientArray)
      })
      .catch( error => {
        console.log(error);
      });
  }

  render() {
    let dishContent = null;
    // console.log(this.props.match.params.title)
    this.state.isLoading ?
      dishContent = <div>Loading...</div> :
      dishContent = (
        <div className={classes.DishPage}>
          <h1>{this.props.match.params.title}</h1>
          <DishDetails
            dish={this.state.currentDish}
            ingredients={this.state.convertedIngredientArray}
            itemsNumber={this.state.numberOfItems}
            totalPrice={this.state.totalPrice}
            changeItemsNumber={this.changeNumberOfItems}
            title={this.props.match.params.title}
          />
        </div>
      );

    return (
      <div className={classes.DishPage}>
        <Breadcrumbs/>
        {dishContent}
      </div>
    )
  }
}
