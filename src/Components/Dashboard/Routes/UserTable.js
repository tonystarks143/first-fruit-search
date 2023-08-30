import React, { Component } from 'react';
import TableRow from './TableRow';

class UserTable extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handleAgeUpdate = (userId, newAge) => {
    const updatedUsers = this.state.users.map(user => {
      if (user.id === userId) {
        return { ...user, age: newAge };
      }
      return user;
    });

    this.setState({ users: updatedUsers });

    // Store new age in local storage
    localStorage.setItem(`user-${userId}-age`, newAge);

    // Store new age in session storage
    sessionStorage.setItem(`user-${userId}-age`, newAge);
  };


  render() {
    return (
      <div className="container mt-4">
        <div class="row">
          <div class="col-sm-9">
            <h2>Form in Bootstrap Table - React</h2>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map(user => (
                    <TableRow
                      key={user.id}
                      user={user}
                      handleAgeUpdate={this.handleAgeUpdate}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTable;
