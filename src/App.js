import React from "react";
import './App.css';
import Burger from './component/burger';
import BuildControl from './component/burgercontrol/control'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Burger Builder</h1>
        <p>Build your own burger!</p>
      </header>
      <main>
        <section className="Burger-builder">
         <Burger />
         <BuildControl />
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Burger Builder</p>
      </footer>
    </div>
  );
}

export default App;
