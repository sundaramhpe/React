import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments:'',
            topic:''
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })

    }
    handlerChangeComments = event =>{
        this.setState({
            comments: event.target.value
        })
    }
    handlerChangeTopic=event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit =event =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const {userName,comments,topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Enter the Name </label>
                    <input type='text' value={userName} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label> Comments </label>
                    <textarea type='text' value={comments} onChange ={this.handlerChangeComments} />
                </div>
                <div>
                    <label> Comments </label>
                    <select value={topic} onChange={this.handlerChangeTopic}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit </button>
                </div>
            </form>
        )
    }
}

export default Form
