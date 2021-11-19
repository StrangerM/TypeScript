import React from 'react'

export const Navbar : React.FunctionComponent = () =>{
    
    function handleClick(e : any) {
        e.preventDefault();
        console.log('Посилання було натиснуте.');
      }

  return  (
        <nav>
        <div className="nav-wrapper px1">
        <a href="/" className="brand-logo">Store</a>
        <ul  className="right hide-on-med-and-down">
            <li><a href="/">All</a></li>
            <li><a href="/">Watches</a></li>
            <li><a href="/">Mobile phones</a></li>
            <li><a href="/">Audio</a></li>
            <li><a href="/">Game gadgets</a></li>
            <li><a href="/" onClick={handleClick}>Add new Item</a></li>
        </ul>
        </div> 
    </nav>
    )
}