import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory} from "react-router-dom";

const GardenForm = ({ user }) => {
  const [garden, setGarden] = useState([]);
  const history=useHistory()
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
	  setGarden(data)
	  history.push("/")
        } else {
          alert(data["error"]);
        }
      });
  };
  return (
    <div>
      <h3>make garden</h3>
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
      {!user.garden ? <p></p> :
	<Link to= "/plotform">Make plots</Link>}
	<br/>
    </div>
  );
};
export default GardenForm;
