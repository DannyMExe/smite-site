import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <h2>No Users to display</h2>
      )}
    </article>
  );
};

export default Users;
