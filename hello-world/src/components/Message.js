import React,{Component} from 'react'
 
class Message extends Component{
    constructor(){
        super()
        this.state ={
            message : 'Welcome to Visitors'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for subscribing'
        })
    }
    render(){
    return <di>
    <h1> {this.state.message}</h1>
    <button onClick={()=>this.changeMessage()}>Subscribe</button>
    </di>
    } 
}

export default Message 