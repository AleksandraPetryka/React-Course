import React, { useCallback, useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async (meal) => {
    setError(null);
    // try {
    const response = await fetch('https://react-http-e05c6-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const data = await response.json();

    const loadedMeals = [];
    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price
      });
    }
    setMeals(loadedMeals);

    // } catch (error) {
    //   setError(error.messages);
    // }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchMealsHandler().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, [fetchMealsHandler]);

  if (isLoading) {
    return (<section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>);
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (error) {
     return (<section className={classes.MealsError}>
       <p>{error}</p>
     </section>);
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
