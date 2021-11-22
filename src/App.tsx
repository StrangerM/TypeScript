import React from 'react';
import {Navbar} from "./components/Navbar"
import {AddItem} from "./components/AddNewItem"

function App() {
  return <>
  <Navbar />
  <div className="container">
    <AddItem />
    
  </div>
  </>
}

export default App;
