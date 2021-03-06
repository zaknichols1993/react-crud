import React, { Component } from 'react';

class AddUser extends Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form className='smaller' onSubmit={this.handleSubmit}>
                    <label>Add new user:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.name}></input>
                </form>
            </div>
        )
    }
}

export default AddUser;