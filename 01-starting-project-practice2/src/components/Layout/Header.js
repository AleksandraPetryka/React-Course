import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from './meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' className={classes.mainImage}/>
      </div>
    </Fragment>
  );
};

export default Header;