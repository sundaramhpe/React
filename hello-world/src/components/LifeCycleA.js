import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sundar'
        }
        console.log('LifecycleA Constucter excuted ')
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA derived statefrom props executed ")
        return null
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA should component update  executed ")
        return true 
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA Snapshot before update   executed ")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleA Console did Updte executed ")
    }  
    changeState =()=>{
        this.setState({
            name:'sundar'
        })
    }
      
    render() {
        console.log("LifecycleA Render method executed ")
        return (
            <div>
                LifeCycleA render
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
