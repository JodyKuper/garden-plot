
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./compontents/Header"
import Home from "./compontents/Home"
import Garden from "./compontents/Garden"
import Signup from "./compontents/Signup"
import Login from "./compontents/Login"
import GardenForm from "./compontents/GardenForm"
import PlotForm from "./compontents/PlotForm"
import Plot from "./compontents/Plot"
import PlantForm from "./compontents/PlantForm"
import './App.css';

function App() {
  const [user, setUser]=useState({})
  const [loggedIn, setLoggedIn]= useState(false)
  const [users, setUsers] = useState([]);
//   const[garden, setGarden]= useState([])
  let history =useHistory()

  
useEffect(()=>{
    fetch("/me")
    .then((res)=>res.json())
    .then((data)=> {
    if (!data.error) {
      setUser(data)
      setLoggedIn(true)
    }
    })
  },[])


  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

 
  

  const handleLogout=(e)=> {
    e.preventDefault()
    const delObj= {
      method: "Delete"
    }
    fetch("/logout", delObj)
      
      .then (()=> {
       
        setLoggedIn(false)
        setUser({})
        history.push("/")
      })
  } 
  
  return (
    <div className="App">
      <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
      <br></br>
      <Switch>
        <Route exact path="/">
          <Home users={users}/>
        </Route>
        <Route exact path= "/gardens/:id">
          <Garden/>
        </Route>
        <Route exact path='/signup'>
          <Signup setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route exact path='/login'>
          <Login setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route exact path= '/gardenform'>
          {loggedIn ?   (<GardenForm user= {user}/>
          ) : (
            <Redirect to= "/login"/>
          )}
        </Route>
        <Route exact path="/plotform">
          {loggedIn ?  ( <PlotForm user={user}  />
          ) : (
          <Redirect to= "/login"/>
          )}
        </Route>
		
		<Route exact path="/plantform">
			<PlantForm/>
		</Route>
		
		<Route exact path="/plot/:id">
			<Plot/>
		</Route>
      </Switch>
      
    </div>
  );
}

export default App;
