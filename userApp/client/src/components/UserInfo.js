import React, { Component } from "react";

class UserInfo extends Component {
  state = {
    userName: "",
    result: ""
  };

  handleClick = () => {
    console.log("state", this.state);
    console.log("props", this.props);
    this.setState({
      result: this.props.data
    });
  };
  render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ userName: e.target.value })}
          placeholder="User Name"
        />
        <button onClick={this.handleClick}>Get User Info</button>
        <br />
        {this.state.result}
      </div>
    );
  }
}

export default UserInfo;
