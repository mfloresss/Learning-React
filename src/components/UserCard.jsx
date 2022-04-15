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
    (async () => {
      await updateUser();
    })();
  }, []);

  return (
    <>
      {userVerified ? (
        <div
          style={{
            height: "80%",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "#F24333",
            borderRadius: "20px",
          }}
        >
          <header style={styles}>
            <h1>
              {user.name.first} {user.name.last}
            </h1>
            <img style={{ width: "150px" }} src={user.picture.large} />
          </header>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <section style={styles}>
              <h2 style={{ fontSize: "20px" }}>Localitation</h2>
              <ul style={{ fontSize: "10px" }}>
                <li>City: {user.location.city}</li>
                <li>State: {user.location.state}</li>
                <li>Contry: {user.location.country}</li>
              </ul>
            </section>
            <section style={styles}>
              <h2 style={{ fontSize: "20px" }}>Contact</h2>
              <ul style={{ fontSize: "10px" }}>
                <li>{user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Cell: {user.cell}</li>
              </ul>
            </section>
          </div>
          <button style={{ padding: "10px 20px" }} onClick={updateUser}>
            Another user
          </button>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
}
