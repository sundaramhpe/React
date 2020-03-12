import React from 'react';
//function Greet(){
  //  return <h1>Hello Sundaram  </h1>
  //}
 //export const Greet =(props) => {
     //destructure props
//export const Greet =({name,children}) => {
    //or
    export const Greet =(props) => {    
        const {name,children} = props
    // console.log(props)
     //props is immutable
    // props.name='sundaram' 
 return (
     <div>
     <h1> Hello {name} </h1>
     {children}

     </div>
 )

 }
//export default Greet  