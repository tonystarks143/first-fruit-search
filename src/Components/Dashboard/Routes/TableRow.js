import React, { Component } from 'react';

class TableRow extends Component {
  state = {
    newAge: '',
  };

  handleAgeChange = (event) => {
    this.setState({ newAge: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newAge } = this.state;
    if (newAge && !isNaN(newAge)) {
      this.props.handleAgeUpdate(this.props.user.id, parseInt(newAge, 10));
      this.setState({ newAge: '' });
    }
  };

  render() {
    const { user } = this.props;
    const { newAge } = this.state;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="newAge">Update Age</label>
              <input
                type="number"
                className="form-control"
                id="newAge"
                placeholder="New Age"
                value={newAge}
                onChange={this.handleAgeChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </td>
      </tr>
    );
  }
}

export default TableRow;
