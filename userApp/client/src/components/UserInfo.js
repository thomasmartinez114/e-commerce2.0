import React, { Component } from 'react'

class UserInfo extends Component {
    render(){
        return(
            <div>
                <input placeholder='User Name' />
                <button>Get User Info</button>
            </div>
        )
    }
}

export default UserInfo