import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import GroceryList from './components_list/GroceryList'
class App extends Component {
  render() {
  return (
    <div className="App">
      <GroceryList/>
    </div>
  );
}
}
export default App;
