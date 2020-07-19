import React, { Component } from 'react'

 class UserGreetings extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isloggedIn:false 
         }
     }
     
    render() {
       return this.state.isloggedIn && <div>Welcome Sundaram </div>
        // return(
        //     this.state.isloggedIn ?
        //     <div>Welcome Sundaram </div> :
        //     <div>Welcome Guest </div> 
        // )
    //     let messages 
    //     if(this.state.isloggedIn){
    //         messages = <div>Welcome Sundaram</div>
    //     }else{
    //         messages = <div>Welcome Guest </div>
    //     }
    // return <div>{messages}</div>
        // if(this.state.isloggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Sundaram </div> 
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             <div>Welcome Guest </div> 
        //         </div>
        //     )
        // }
        // return (
        //     <div>
               
        //        <div>Welcome Guest  </div>               
        //     </div>
        // )
    }
}

export default UserGreetings
