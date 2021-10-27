import React from "react";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const GardenForm = ({ user }) => {
  const [garden, setGarden] = [];
  const [image, setImage] = useState({
    image: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "garden_img")
      setImage({
        ...image,
        image: Array.from(e.target.files),
      });
  };

  const handleGarden = (e) => {
    e.preventDefault();
    const final = new FormData();
    final.append("image", image.image[0]);
    const gardenObj = {
      method: "POST",
      body: final,
    };
    fetch("/gardens", gardenObj)
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setImage(data);
        } else {
          alert(data["error"]);
        }
      });
  };
  

  return (
    <div>
      make garden
      <Form onSubmit={handleGarden}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            type="file"
            id="garden_img"
            accept="image/*"
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Button type="submit">Submit</Button>
      </Form>
	<Link to= "/plotform">Make plots</Link>
    </div>
  );
};
export default GardenForm;
