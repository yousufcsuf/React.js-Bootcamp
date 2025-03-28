import React from "react";
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];
const UserList = () => {
  return (
    <>
      <div>UserList </div>
      {users.map((user) => {
        return <li>{user.name}</li>;
      })}
    </>
  );
};

export default UserList;
