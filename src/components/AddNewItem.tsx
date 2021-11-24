import { render } from "@testing-library/react";
import React, {useState} from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import{MyComponent} from "./SelectComponent"

export const AddItem : React.FC = () =>{

const [ name, setName] = useState<string>('');
const [ descr, setDescr] = useState<string>('');


const [ file, setPicture] = useState<File>();
    
const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value)
}

const changeHandler1 = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setDescr(event.target.value)
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
            <label htmlFor="first">Name of product</label>
             <form id="first" >
                    <fieldset  >
                       <legend className="upl">Add new Item</legend> 
                        <input
                            onChange ={changeHandler1}
                            value={descr}
                            id="nameId"
                            type="text"
                            placeholder="Input name of product"/>
                        <label htmlFor="nameId" className="active">
                            Description of product
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
                        <div>
                            <MyComponent />
                        </div>
                       <div className ="upl">
                            <input 
                            type="file" 
                            onChange={onChangePicture}
                            id="upload"/>
                        </div>
                        <div>
                        <label  htmlFor="upload">Load Picture:</label>
                       <button type="submit" id="butAd" onClick={PressButton}>Upload Item</button>
                       </div>
                    </fieldset>
                </form>

        </div>
    );
  
}
