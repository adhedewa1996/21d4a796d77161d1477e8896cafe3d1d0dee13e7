import React, { Component } from 'react';
import './App.css';
import Header from '../src/component/Header/Header';
import TombolMenu from '../src/component/TombolMenu/TombolMenu';
import Card from '../src/component/Card/Card';
import Cart from '../src/component/Cart/Cart';
import Modal from '../src/component/Modal/Modal';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          clicks: 0,
          isOpen: false,
      };
      this.IncrementItem = this.IncrementItem.bind(this);
  }

  IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
  }

  setIsOpen = () => {
      this.setState({ isOpen: !this.state.isOpen });
  }

  render (){
    return <div className="App">
      <Header setIsOpen={this.setIsOpen} />

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

      {
        this.state.isOpen === true ? <Modal setIsOpen={this.setIsOpen} /> : <div></div>
      }

    </div>
  }
}

export default App;
