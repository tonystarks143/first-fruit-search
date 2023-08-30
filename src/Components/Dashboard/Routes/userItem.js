import React, { useState } from 'react';

const UserItem = React.memo(({ user, updateUser, deleteUser }) => {
  // State Defining
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);


  //   Set Changes
  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const saveChanges = () => {
    updateUser(user.id, name, age);
    setEditing(false);
  };

  return (
    <li className="list-group-item">
      {editing ? (
        <>
          <input type="text" value={name} onChange={handleNameChange} />
          <input type="number" value={age} onChange={handleAgeChange} />
          <button className="btn btn-success btn-sm mx-2" onClick={saveChanges}>
            Save
          </button>
        </>
      ) : (
        <>
          <strong>{user.name}</strong> - {user.age} years old
          <button className="btn btn-primary btn-sm mx-2 " style={{ margin: '1rem' }} onClick={toggleEdit}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
});

export default UserItem;
