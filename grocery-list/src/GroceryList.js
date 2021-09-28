import React, { Component } from "react";
//import ReactDOM from 'react-dom';
//import ReactTable from "react-table";
import {AppRegistry, SectionList, StyleSheet, Text, View} from 'react-native';
export default class SectionListBasics extends Component {
//class App extends Component{
  render() {
    return(
      <view style = {StyleSheet.container}>
        <SectionList
//function GroceryList(){ 
                  
section = {[
  {title: 'A', data:['Veg']},
   // "item": "Dal",
    //"type": "veg"
  //},
  // {
  //   "item": "Fish",
  //   "type": "non-veg"
  // },
  // {
  //   "item": "Meat",
  //   "type": "non-veg"
  // },
  // {
  //   "item": "Rice",
  //   "type": "veg"
  // }
]}
// const columns = [{
//   Header: 'Veg',
//   accessor: 'veg'
// },
// {
//   Header: 'Nonveg',
//   accessor: 'nonveg'
// }]
// }]

return(
  <div> <ReactTable itemlist= {itemlist} 
  columns = {columns}/>
  </div>
    //itemlist.map=(menu => <div key={menu}>{menu}</div>)
  
);
}
  }
}
export default GroceryList;