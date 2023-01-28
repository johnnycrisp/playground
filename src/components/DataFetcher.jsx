import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} | {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DataFetcher;
