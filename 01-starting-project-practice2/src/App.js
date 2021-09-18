import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  let [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={() => setShowCart(false)}/>}
      <Header onShowCart={() => setShowCart(true)}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
