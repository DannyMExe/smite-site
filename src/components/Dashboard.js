import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = () => {


  const [error, setError] = useState("");
  const { logout, sign } = useAuth();
  const nagivate = useNavigate();

  //console.log(sign)
  // const user = sign?.auth;
  const user = JSON.parse(window.localStorage.getItem("user")) || sign?.auth


  const users = useSelector((state) => state.users);
  const currentUser = users.find((myUser) => myUser.username === user.username);
  // const newuser = axios.get('/api/user', user)
  console.log(currentUser)

  async function handleLogout() {
    setError("");

    try {
      logout();
      nagivate("/login");
    } catch {
      setError("failed to log out");
    }
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center bm-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email: </strong> {user.email}
              {currentUser?.builds.map((build) => {return(
                <div key={build.build_id}>
                  <Link to={`/builds/${build.build_id}`}>{build.name}</Link>
                </div>
              )
              })}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
