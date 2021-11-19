import { render } from "@testing-library/react";
import React, {useState} from "react";
import ReactDOM from "react-dom";

export const AddItem : React.FC = () =>{

const [ name, setName] = useState<string>('');
const [ descr, setDescr] = useState<string>('');
const [ sel, setSel] = useState<string>('');
const [ file, setPicture] = useState<File>();
    
const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value)
}

const changeHandler1 = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setDescr(event.target.value)
}
const changeHandler2 = (event : React.ChangeEvent<HTMLSelectElement>) =>{
    setSel(event.target.value)
}

const onChangePicture = (event : React.FormEvent) =>{
    const files = (event.target as HTMLInputElement).files

    if (files && files.length > 0) {
        setPicture(files[0])
    }
}

   const PressButton = () => {
   
  }
    
    return(
        <div className="input-field">
            <label htmlFor="first">First number</label>
             <form id="first" >
                    <fieldset >
                       <legend>Add new Item</legend> 
                        <input
                            onChange ={changeHandler1}
                            value={descr}
                            id="nameId"
                            type="text"
                            placeholder="Input name of product"/>
                        <label htmlFor="nameId" className="active">
                            Name
                        </label>
                       <input
                            onChange ={changeHandler}
                            value={name}
                            id="DescrId"
                            type="text"
                            placeholder="Add some description for the product"/>
                       <label htmlFor="DescrId" className="active">
                           Description
                        </label>              
                       <label  htmlFor="selectId" className="active">
                           Choose Category:
                        </label>
                       <select
                            id="selectId"
                            value={sel}
                            onChange={changeHandler2}
                            name="cars">
                         <option value="Watches">Watches</option>
                         <option value="Mobile phones">Mobile phones</option>
                         <option value="Audio">Audio</option>
                         <option value="Game gadgets">Game gadgets</option>
                       </select>
                        <input 
                        type="file" 
                        onChange={onChangePicture}
                        id="upload"/>
                        <label  htmlFor="upload">Load Picture:</label>
                       <button type="submit" id="butAd" onClick={PressButton}>Upload Item</button>
                    </fieldset>
                </form>

        </div>
    );
  
}
