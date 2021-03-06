
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
import './App.css';

function App() {
  const [user, setUser]=useState({})
  const [loaded, setLoaded]= useState(false)
  const [loggedIn, setLoggedIn]= useState(false)
  const [users, setUsers] = useState([]);
  let history =useHistory()
  
useEffect(()=>{
    fetch("/me")
    .then((res)=>res.json())
    .then((data)=> {
		if (!data.error) {
			setUser(data)
			setLoggedIn(true)
		  }
		  setLoaded(true);
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

	if (!loaded) {
		return <div/>;
	}
  
  return (
    <div className="App">
      <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
		<h1>Garden Plots</h1>
      <br/>
      <Switch>
        <Route exact path="/">
          <Home users={users}/>
        </Route>
        <Route exact path= "/gardens/:id">
		<Garden user={user}/>
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
		<Route exact path="/plot/:id">
		{loggedIn ?   (<Plot user={user}/>
            ) : (
                <Redirect to= "/login"/>
            )}
		</Route>
      </Switch>   
    </div>
  );
}

export default App;
