import React from 'react';

const Users = ({users, deleteUser}) => {

    const userList = users.length ? (
        users.map(user => {
            return(
                <div key={user.id}>
                    <span onClick={() => {deleteUser(user.id)}}>{user.name}</span>
                </div>
            )
        })
    ) : (
        <p className="red">there are no users left</p>
    )
    return(
        <div>{userList}</div>
    )
}

export default Users;