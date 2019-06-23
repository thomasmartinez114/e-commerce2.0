import React, { Component } from 'react';

class Registration extends Component{
    state={
        userName: '',
        message: ''
    }
    
    handleClick = () => {
        console.log('userName:', this.state.userName);
        console.log('message:', this.state.message);
    }
    
    render(){
        return (
            <div>
                <h3>User Registration</h3>
                <input
                  onChange={ e => this.setState({userName: e.target.value})}
                  placeholder="User Name"
                />
                <input
                  onChange={ e => this.setState({message: e.target.value})}
                  placeholder="Message"
                />
                <button onClick={this.handleClick}>Submit</button>
                {this.state.userName}
                {this.state.message}
            </div>
        )
    }
}

export default Registration