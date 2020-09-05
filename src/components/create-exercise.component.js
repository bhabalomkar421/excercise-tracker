import React from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      description :  '',
      duration : 0,
      date : new Date(),
      users : []
    }
  } 

  componentDidMount(){
    axios.get("http://localhost:5000/users/")
      .then(response => {
        if(response.data.length > 0){
          this.setState({
            users:  response.data.map(user => user.username),
            username: response.data[0].username 
          });
        }
      });
  }

  onChangeUsername = (e) => {
    this.setState({
      username : e.target.value
    });
  }

  onChangeDescription = (e) => {
    this.setState({
      description : e.target.value
    });
  }

  onChangeDuration = (e) => {
    this.setState({
      duration : e.target.value
    });
  }

  onChangeDate = (date) => {
    this.setState({
      date : date
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username : this.state.username,
      description : this.state.description,
      duration : this.state.duration,
      date : this.state.date
    }
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));
    window.location = "/";
  }

  render(){
    return (
      <div className ="container">
        <h3>Create New Exercise Log </h3>
        <form onSubmit = {this.onSubmit}>
          <div className = "form-group">
            <select 
              onChange = {this.onChangeUsername}
              className = "form-control"
              value = {this.state.username}
              required
              >
              {this.state.users.map((user) => <option key={user} value={user}>{user}</option>)}
            </select>
          </div>
          <div className = "form-group">
            <input type = "text" className = "form-control" onChange = {this.onChangeDescription} placeholder ="Description"/>
          </div>
          <div className = "form-group">
            <input type = "text" className = "form-control" onChange = {this.onChangeDuration} placeholder ="Duration"/>
          </div>
          <div className = "form-group">
            <label>Date</label>
            <DatePicker 
              className = "form-control"
              onChange = {this.onChangeDate}
              selected = {this.state.date}
            />
          </div>
          <div className = "form-group">
            <input type="submit"  value = "Create Exercise Log" className = "btn btn-primary btn-lg" />
          </div>
        </form>
      </div>
    );
  }
}
