import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap"

const Signup = ({ setUser, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation]= useState("")
  const [profileImage, setProfileImage]= useState({
	  image: ""
  })
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.id === "username") setUsername(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
	if (e.target.id ==="location") setLocation(e.target.value)
	if (e.target.id ==="profile_img") setProfileImage({
		...profileImage, image: Array.from(e.target.files)
	})
  };
console.log(profileImage)
  const handleSignup = (e) => {
    e.preventDefault();
	const final= new FormData()
	final.append("username",username)
	final.append("password",password)
	final.append("location",location)
	final.append("image", profileImage.image[0])
	// for(const key in profileImage) {
	// 	console.log(key)
	// 	for(const image in profileImage[key]){
	// 		console.log(image)
	// 		final.append("image[]",profileImage[key][image])
	// 	}
	// }
	console.log(final.get("image"))
    const signupObj = {
      method: "POST",
      
      body: final
    };
    fetch("/signup", signupObj)
    .then ((res)=> res.json())
      .then((data) => {
        if (data.id) {
          setUser(data);
          setLoggedIn(true);
          history.push("/gardenform");
        }else {
         
          alert(data["error"])
        }
      })
      
  };
  console.log(setUser)
  return (
    <div>
        <h3>Sign up</h3>
        <Form onSubmit={handleSignup}>
		<Form.Group className='mb-3'controlId='formBasicUsername'>
					
		<Form.Control
		    size=""
            type="text"
	    	id="username"
        	placeholder="username"
			value={username}
        	onChange={handleChange}		
      			/>
	   </Form.Group>   
		 <br></br>
      						      
		<Form.Group className='mb-3'controlId='formBasicUsername'>      
		
		<Form.Control
			size=""
			type="text"
			id="password"
			placeholder="password"
			value={password}
			onChange={handleChange}
			/>
		</Form.Group>
		<br></br>
		
		<Form.Group className='mb-3'controlId='formBasicUsername'>      
		<Form.Control
			size=""
			type="text"
			id="location"
			placeholder="location"
			value={location}
			onChange={handleChange}
					/>
		</Form.Group>
			<br></br>
		<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Profile Picture</Form.Label>
    <Form.Control
		type="file"
		id= "profile_img"
		accept="image/*"
		onChange= {handleChange}
		/>
  	</Form.Group>
		<br></br>			
		<Button type="submit">Submit</Button>
    	</Form>
    </div>
  );
};
export default Signup
