import React from 'react';
import './App.css';
import Header from '../src/component/Header/Header';
import TombolMenu from '../src/component/TombolMenu/TombolMenu';
import Card from '../src/component/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />

      <TombolMenu />

      <div className="card-container">
        <p> Kamis, 13 Maret 2019 </p>

        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default App;
