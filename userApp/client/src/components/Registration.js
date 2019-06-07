import React, { Component } from 'react';

class Registration extends Component{
    render(){
        return (
            <div>
                <input placeholder="User Name" />
                <input placeholder="Message" />
                <button>Submit</button>
            </div>
        )
    }
}

export default Registration