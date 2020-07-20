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
    componentDidMount(){
        console.log("LifeCycleA Console did mout executed ")
    }
    
    render() {
        console.log("LifecycleA Render method executed ")
        return (
            <div>
                LifeCycleA render
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
