import React from 'react';
//function Greet(){
  //  return <h1>Hello Sundaram  </h1>
  //}
 export const Greet =(props) => {
     console.log(props)
     //props is immutable
    // props.name='sundaram' 
 return (
     <div>
     <h1> Hello {props.name} </h1>
     {props.children}

     </div>
 )

 }
//export default Greet  