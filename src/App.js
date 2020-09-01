import React, { Component } from 'react';
import './App.css';
import Header from '../src/component/Header/Header';
import TombolMenu from '../src/component/TombolMenu/TombolMenu';
import Card from '../src/component/Card/Card';
import Cart from '../src/component/Cart/Cart';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          clicks: 0,
      };
      this.IncrementItem = this.IncrementItem.bind(this);
  }

  IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
  }

  render (){
    return <div className="App">
      <Header />

      <TombolMenu />

      <div className="card-container">
        <p> Kamis, 13 Maret 2019 </p>

        <Card IncrementItem={this.IncrementItem} />
        <Card IncrementItem={this.IncrementItem} />
        <Card IncrementItem={this.IncrementItem} />

      </div>

      {
        this.state.clicks === 0 ? <div></div> : <Cart clicks={this.state.clicks} />
      }

    </div>
  }
}

export default App;
