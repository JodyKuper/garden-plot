import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export const Home = ({ users }) => {
  return (
    <div>
      {users.map((u) =>
        !u.garden ? (
          <Link to={"/gardenform"}>
            <Card
              border="danger"
              style={{
                width: "50rem",
                display: "inline-block",
                border: "solid black",
                margin: "10px",
              }}
            >
              <Card.Img varient="top" />
              <Card.Body>
                <Card.Title>{u.username}</Card.Title>
                <img
                  classname="profile-img"
                  height="200px"
                  width="200px"
                  src={u.image.url}
                  alt="Profile"
                />

                <Card.Text>Location:{u.location}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ) : (
          <Link to={`gardens/${u.garden.id}`}>
            <Card
              border="danger"
              style={{
                width: "50rem",
                display: "inline-block",
                border: "solid black",
                margin: "10px",
                bg: "black",
              }}
            >
              <Card.Img varient="top" src={u.garden.image.url} />
              <Card.Body>
                <Card.Title>{u.username}</Card.Title>
                <img
                  classname="profile-img"
                  height="200px"
                  width="200px"
                  src={u.image.url}
                  alt="profile"
                />
                <Card.Text>Season:{u.garden.season}</Card.Text>
                <Card.Text>Location:{u.location}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        )
      )}
    </div>
  );
};
export default Home;
