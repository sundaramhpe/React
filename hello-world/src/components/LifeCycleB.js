import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            name:'Sundar'
       }
       console.log('LifecycleB Constucter excuted ')
   }

   static getDerivedStateFromProps(props,state){
       console.log("LifeCycleB derived statefrom props executed ")
       return null
   }
   shouldComponentUpdate(){
    console.log("LifeCycleB should component update  executed ") 
    return true 
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("LifeCycleB Snapshot before update   executed ")
    return null
}
componentDidUpdate(){
    console.log("LifeCycleB Console did Updte executed ")
}  
    
   
   render() {
       console.log("LifecycleB Render method executed ")
       return (
           <div>
               LifeCycleB render
           </div>
       )
   }
}
export default LifeCycleB
