import React, { useState } from "react";
import './control.css';

function BuildControl() {
  const [ingredients, setIngredients] = useState({
    meat: 0,
    cheese: 0,
    lettuce: 0,
    tomato: 0,
  });

  // Орц найрлагын үнэ
  const ingredientPrices = {
    meat: 1500,
    cheese: 800,
    lettuce: 500,
    tomato: 600,
  };

  const addIngredient = (type) => {
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [type]: prevIngredients[type] + 1,
    }));
  };

  const removeIngredient = (type) => {
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [type]: Math.max(0, prevIngredients[type] - 1),
    }));
  };

  const getTotalIngredients = () => {
    return Object.values(ingredients).reduce((total, count) => total + count, 0);
  };

  const getTotalPrice = () => {
    const basePrice = 2000; // Үндсэн талхны үнэ
    const ingredientCost = Object.keys(ingredients).reduce((total, type) => {
      return total + (ingredients[type] * ingredientPrices[type]);
    }, 0);
    return basePrice + ingredientCost;
  };

  return (
    <div className="build-controls">
      <h2>Add Ingredients</h2>
      
      <div className="build-control">
        <label>Meat (₮{ingredientPrices.meat})</label>
        <div className="control-buttons">
          <button 
            className="control-btn less" 
            onClick={() => removeIngredient('meat')}
            disabled={ingredients.meat === 0}
          >
            -
          </button>
          <span className="count-display">{ingredients.meat}</span>
          <button 
            className="control-btn more" 
            onClick={() => addIngredient('meat')}
          >
            +
          </button>
        </div>
      </div>

      <div className="build-control">
        <label>Cheese (₮{ingredientPrices.cheese})</label>
        <div className="control-buttons">
          <button 
            className="control-btn less" 
            onClick={() => removeIngredient('cheese')}
            disabled={ingredients.cheese === 0}
          >
            -
          </button>
          <span className="count-display">{ingredients.cheese}</span>
          <button 
            className="control-btn more" 
            onClick={() => addIngredient('cheese')}
          >
            +
          </button>
        </div>
      </div>

      <div className="build-control">
        <label>Lettuce (₮{ingredientPrices.lettuce})</label>
        <div className="control-buttons">
          <button 
            className="control-btn less" 
            onClick={() => removeIngredient('lettuce')}
            disabled={ingredients.lettuce === 0}
          >
            -
          </button>
          <span className="count-display">{ingredients.lettuce}</span>
          <button 
            className="control-btn more" 
            onClick={() => addIngredient('lettuce')}
          >
            +
          </button>
        </div>
      </div>

      <div className="build-control">
        <label>Tomato (₮{ingredientPrices.tomato})</label>
        <div className="control-buttons">
          <button 
            className="control-btn less" 
            onClick={() => removeIngredient('tomato')}
            disabled={ingredients.tomato === 0}
          >
            -
          </button>
          <span className="count-display">{ingredients.tomato}</span>
          <button 
            className="control-btn more" 
            onClick={() => addIngredient('tomato')}
          >
            +
          </button>
        </div>
      </div>

      <div className="price-info">
        <div>Total Ingredients: {getTotalIngredients()}</div>
        <div>Total Price: ₮{getTotalPrice().toLocaleString()}</div>
      </div>

      <button 
        className="order-button"
        disabled={getTotalIngredients() === 0}
      >
        Order Now
      </button>
    </div>
  );
}

export default BuildControl;
