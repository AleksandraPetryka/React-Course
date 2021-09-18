import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = props => {
  return (
    <section>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </section>

  );
};

export default Meals;