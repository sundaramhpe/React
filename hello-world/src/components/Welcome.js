import React,{Component} from 'react'
 
class Welcome extends Component{
    
    render(){
        //const added for distributed props
        const {name} =this.props

        //const for state props
        //const {state1,state2} = this.state
   // return <h1> Welcome {this.props.name}</h1>
    return <h1> Welcome {name}</h1>
    }
}

export default Welcome 