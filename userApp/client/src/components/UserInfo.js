import React, { Component } from 'react'

class UserInfo extends Component {
    state={
        userName: ''
    }

    handleClick = () => {
        console.log('userName', this.state.userName);
    }
    render(){
        return(
            <div>
                <input
                  onChange={ e => this.setState({userName: e.target.value})}
                  placeholder='User Name'
                />
                <button onClick={this.handleClick}>Get User Info</button>
            </div>
        )
    }
}

export default UserInfo