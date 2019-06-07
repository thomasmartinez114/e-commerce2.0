import React, { Component } from 'react'
import Registration from './components/Registration';
import UserInfo from './components/UserInfo';
import AllUsers from './components/AllUsers';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>My Express App</h2>
        <Registration />
        <h3>Get User Info</h3>
        <UserInfo />
        <h4>Get All Users</h4>
        <AllUsers />
      </div>
    )
  }
}
