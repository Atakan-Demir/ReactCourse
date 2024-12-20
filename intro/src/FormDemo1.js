import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = { userName: '', city: '' }
    onChangeHandler = (event) => {
        //this.setState({ userName: event.target.value })
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value })
    }
    onSubmitHandler = (event) => {
        event.preventDefault()//sayfa yenilenmesini engeller
        alert(this.state.userName)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input type="text" onChange={this.onChangeHandler} name='userName'></input>
                    <h3>User Name is {this.state.userName}</h3>

                    <h3>City</h3>
                    <input type="text" onChange={this.onChangeHandler} name='city'></input>
                    <h3>City is {this.state.city}</h3>

                    <input type="submit" value="Save"></input>

                </form>
            </div>
        )
    }
}
