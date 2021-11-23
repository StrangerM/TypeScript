import React from 'react';
import {Navbar} from "./components/Navbar"
import {AddItem} from "./components/AddNewItem"
import {AddItems} from './goods';

const App : React.FC = () => {

  return <>
  <Navbar />
  <div className="container">
    <AddItem />
    
  </div>
  </>
}

export default App;
