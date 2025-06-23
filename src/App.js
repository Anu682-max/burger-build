import React from 'react';
import './App.css';
import Burger from './component/burgerbuild/burger';
import BuildControl from './component/burgercontrol/control';
import OrderedPage from './pages/ordered';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [meat, setMeat] = React.useState(0);
  const [cheese, setCheese] = React.useState(0);
  const [salad, setSalad] = React.useState(0);
  const [tomato, setTomato] = React.useState(0);

  const ingredientsPrice = {
    meat: 1.5,
    cheese: 0.5,
    salad: 0.3,
    tomato: 0.4,
  };
  const baseBurgerPrice = 2.0;
  const calculatePrice = () => {
    const totalPrice =
      baseBurgerPrice +
      meat * ingredientsPrice.meat +
      cheese * ingredientsPrice.cheese +
      salad * ingredientsPrice.salad +
      tomato * ingredientsPrice.tomato;
    return totalPrice.toFixed(2);
  };

  const addmeat = () => setMeat(meat + 1);
  const addcheese = () => setCheese(cheese + 1);
  const addsalad = () => setSalad(salad + 1);
  const addtomato = () => setTomato(tomato + 1);

  const removeMeat = () => setMeat(meat > 0 ? meat - 1 : 0);
  const removeCheese = () => setCheese(cheese > 0 ? cheese - 1 : 0);
  const removeSalad = () => setSalad(salad > 0 ? salad - 1 : 0);
  const removeTomato = () => setTomato(tomato > 0 ? tomato - 1 : 0);

  const BurgerBuilderPage = () => (
    <div className="App">
      <header className="App-header">
        <h1>Burger Build</h1>
        <p>Build your own burger!</p>
      </header>
      <main>
        <section className="burger-builder">
          <Burger meat={meat} cheese={cheese} salad={salad} tomato={tomato} />
          <BuildControl
            meat={meat}
            cheese={cheese}
            salad={salad}
            tomato={tomato}
            addmeat={addmeat}
            addcheese={addcheese}
            addsalad={addsalad}
            addtomato={addtomato}
            removeMeat={removeMeat}
            removeCheese={removeCheese}
            removeSalad={removeSalad}
            removeTomato={removeTomato}
            totalPrice={calculatePrice}
            ingredientsPrice={ingredientsPrice}
          />
        </section>
        <section className="price-display">
          <h2>Total Price: ${calculatePrice()}</h2>
          <p>Base Price: ${baseBurgerPrice.toFixed(1)}</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Burger Build</p>
      </footer>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BurgerBuilderPage />} />
        <Route path="/ordered" element={<OrderedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
