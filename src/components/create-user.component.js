import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : ''
    }
  } 

  onChangeUsername = (e) => {
    this.setState({
      username : e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username : this.state.username
    }

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
    console.log(user);
    this.setState({
      username : ''
    });
    window.location = "/create"
  }

  render(){
    return (
      <div className="container">
        <h3>create user</h3>
        <form onSubmit = {this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type = "text" id="username" onChange={this.onChangeUsername} className = "form-control" placeholder="e.g. John" />
          </div>
          <div className="form-group">
            <input type = "submit" value = "Create New User"  className = "btn btn-primary btn-lg" />
          </div>
        </form>
      </div>
    );
  }
}