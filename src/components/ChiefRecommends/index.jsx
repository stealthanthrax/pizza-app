import React from 'react';

import classes from './ChiefRecommends.css';
import RecommendationTab from './RecommendationTab';
import TabContent from './TabContent';
import axios from '../../axios-delivery';

const TAB_CATEGORIES = [
  {
    id: "pizza",
    title: "Pizza"
  }
];

const INITIAL_STATE = {
  activeCategory: "pizza",
  currentTabContent: [],
  isLoading: true
};

export default class ChiefRecommends extends React.Component {
  state = {...INITIAL_STATE};

  componentWillMount() {
    this.setState({isLoading: true});
    this.getCurrentTabContent(this.state.activeCategory);
  }

  selectedCategoryHandler = (key) => {
    this.setState({activeCategory: key});
    this.getCurrentTabContent(key);
  };

  getCurrentTabContent(id) {
    axios.get(`https://pizza-app-backend.herokuapp.com/chiefRecommendations/${id}.json`)
      .then(response => {
        this.setState({
            currentTabContent: response.data,
            isLoading: false
        });
      })
      .catch( error => {
        console.log(error);
      });
  }

  render() {
    let tabDynamicContent = null;
    this.state.isLoading ?
      tabDynamicContent = <div>Loading...</div> :
      tabDynamicContent = (
        <TabContent
          activeCategory={this.state.activeCategory}
          dishes={this.state.currentTabContent}
        />
      );

    return (
      <div className={classes.Recommendation}>
        <h2>Chef Recommends</h2>
        <RecommendationTab
          selectedCategory={this.selectedCategoryHandler}
          categories={TAB_CATEGORIES}
          activeCategory={this.state.activeCategory}/>
        {tabDynamicContent}
      </div>
    )
  }
}
