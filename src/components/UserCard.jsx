import React, { useState, useEffect } from "react";
import getUser from "../helpers/getUser";

export default function UserCard() {
  const [user, setUser] = useState({});
  const [userVerified, setUserVerified] = useState(false);

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const updateUser = async () => {
    const user = await getUser();

    if (user.results) {
      setUserVerified(true);

      const userData = user.results.map((newUser) => {
        setUser(newUser);
      });
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <>
      {userVerified ? (
        <div
          style={{
            height: "800px",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "#F24333",
          }}
        >
          <header style={styles}>
            <h1>
              {user.name.first} {user.name.last}
            </h1>
            <img style={{ width: "200px" }} src={user.picture.large} />
          </header>
          <section style={styles}>
            <h2>Localitation</h2>
            <ul>
              <li>Street number: {user.location.street.number}</li>
              <li>Street name: {user.location.street.name}</li>
              <li>City: {user.location.city}</li>
              <li>State: {user.location.state}</li>
              <li>Contry: {user.location.country}</li>
            </ul>
          </section>
          <section style={styles}>
            <h2>Contact</h2>
            <ul>
              <li>{user.email}</li>
              <li>Phone: {user.phone}</li>
              <li>Cell: {user.cell}</li>
            </ul>
          </section>
          <button onClick={updateUser}>Another user</button>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
}
