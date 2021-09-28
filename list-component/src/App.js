import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import List_Items from './components_list/List_Items'
class App extends Component {
  render() {
  return (
    <div className="App">
      <List_Items/>
    </div>
  );
}
}
export default App;
