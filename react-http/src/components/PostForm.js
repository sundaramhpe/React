import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
        // Initialize the attribute field 
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value  // assign the key and value 
        })
    }
    submitHandler =(e)=>{
        e.preventDefault() // prevent the page refresh 
        console.log(this.state)
        // make the post Request First argument is the URL and secod Argument which is the data to send 
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label> Enter User ID</label>
                        <input type='text'
                            name='userId'
                            value={userId}
                            onChange={this.changeHandler} 
                        />
                    </div>
                    <div>
                        <label> Enter Title </label>
                        <input type='text'
                            name='title'
                            value={title}
                            onChange={this.changeHandler}
                         />
                    </div>
                    <div>
                        <label> Enter Body</label>
                        <input type='text'
                            name='body'
                            value={body} 
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type='submit' >Submit </button>
                </form>
            </div>
        )
    }
}

export default PostForm
