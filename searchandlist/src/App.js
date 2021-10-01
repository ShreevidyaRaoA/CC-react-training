//import logo from './logo.svg';
import './App.css';
import DummyStates from "./dummystates/DummyStates";

import styles from "./dummystates/DummyStates.module.css";
import SearchList from "./searching/SearchList";
import HackerStories from "./hackerstories/HackerStories";
import styles from "./hackerstories/PropsList.module.css";

const List = [
    {
        title: "New ShanthiSagar",
        name: "Idli",
        amount: 40,
    },
    {
        title: "WoodLands",
        name: "Masala Dosa",
        amount: 50,
    },
];
function App() {
  return (
    <div className = {styles.container}>
      <h1>My search list</h1>
      <HackerStories List= {List} item={List}/>
     
    </div>
  );
}

function App() {
    return (
      <div>
   <DummyStates/>
   </div>
    );
}
export default App;

function App() {
  return (
    <div>
 <SearchList/>
 </div>
  );
}
export default App;