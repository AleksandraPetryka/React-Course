import React from 'react';
import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from './dummy-meals';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = props => {
  const mealsList = DUMMY_MEALS.map(meal => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ))
  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          {mealsList}
        </Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;