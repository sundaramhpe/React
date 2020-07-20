import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Sundaram'
         }
     }
     
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Sundaram'
            })
         },2000)
        }
    render() {
        console.log("*************Parant Component Render ******************")
        return (
            <div> 
                Parent Component {this.state.name}
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
