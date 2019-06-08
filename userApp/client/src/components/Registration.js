import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  state = {
    userName: "",
    message: ""
  };

  handleClick = () => {
    console.log("userName:", this.state.userName);
    console.log("message:", this.state.message);

    const data = {
      username: this.state.userName,
      message: this.state.message
    };

    axios.post("/api", data)
    .then(res => console.log(res.data))
  };

  render() {
    return (
      <div>
        <h3>User Registration</h3>
        <input
          onChange={e => this.setState({ userName: e.target.value })}
          placeholder="User Name"
        />
        <input
          onChange={e => this.setState({ message: e.target.value })}
          placeholder="Message"
        />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.userName}
        {this.state.message}
      </div>
    );
  }
}

export default Registration;
