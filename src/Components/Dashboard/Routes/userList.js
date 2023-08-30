import React, { useState, useCallback, useEffect } from 'react';
import UserItem from './userItem';

const UserList = () => {
    // State Defining
    const [users, setUsers] = useState([
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Tom', age: 28 },
    ]);
    // State Changes and useCallback
    useEffect(()=>{
        document.title='UserList'
    },[])
    const addUser = useCallback(() => {
        const newUser = { id: Date.now(), name: 'New User', age: 0 };
        setUsers(prevUsers => [...prevUsers, newUser]);
    }, []);

    const updateUser = useCallback((id, newName, newAge) => {
        const updatedUsers = users.map(user => {
            // Checks the equal and data type
            if (user.id === id) {
                return { ...user, name: newName, age: newAge };
            }
            return user;
        });
        setUsers(updatedUsers);
    }, [users]);

    const deleteUser = useCallback((id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    }, [users]);

    return (
        <div>

            <div class="container  mt-4">
                <div class="row">
                    <div class="col-sm-9">
                        <h2>User List</h2>
                        <button className="btn btn-primary mb-3" onClick={addUser}>
                            Add User
                        </button>
                        <ul className="list-group" style={{margin:'1rem'}}>
                            {users.map(user => (
                                <UserItem
                                    key={user.id}
                                    user={user}
                                    updateUser={updateUser}
                                    deleteUser={deleteUser}
                                />
                            ))}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
