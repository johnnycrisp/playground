import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const DataFetcher = () => {
  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";

  //TO DO - make getNextUser function to pass variable into header aka users/1, users/2 etc. Link to Get Next User button.

  //TO DO - GSAP slider intro for content.

  const FetcherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `;

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
  }, [newUsers]);

  return (
    <FetcherWrapper>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} | {user.email}
            </li>
          );
        })}
      </ul>
      <button onClick={() => setNewUsers((newUsers) => !newUsers)}>
        Get New Users
      </button>
    </FetcherWrapper>
  );
};

export default DataFetcher;
