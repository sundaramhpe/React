import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    // incrementCount(){
    //     // this.setState({
    //     //     count:this.state.count+1
    //     // },
    //     // ()=>{
    //     //     console.log('Callback Value',this.state.count)
    //     // })
    //     //this.state.count=this.state.count+1
    //      this.setState((prevState)=>({
    //          count: prevState.count+1 
    //      }))
    //     //console.log(this.state.count) 
    // }
    // incrementFive(){
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.incrementCount)}
            </div>
        )
        // return ( 
        //     <div>
        //         <div> Count -{this.state.count} </div>
        //         <button onClick={()=>this.incrementFive()}>Increment</button>               
                
        //     </div>
        // )
    }
}

export default Counter
                                                  