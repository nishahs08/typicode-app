
import { Toolbar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {Navbar} from './Components/Navbar'
import { UserInformation } from './Components/UserInformation';
import {Users} from './Components/Users'
function App() {
  const [users,setUsers] = useState([]);
  const [user,setUser]=useState({});

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(response=>{ console.log(response); setUsers(response) })
  },[])

  return (
    <Router>
      <Navbar/>
      <Toolbar/>
      <Route path='/blogs'> 
        <h1>hSGDjbsdf</h1>
        <h4>GASJDaf</h4>
        <h1>hSGDjbsdf</h1>
        <h4>GASJDaf</h4>
      </Route>
      <Route exact path='/'>
      <Toolbar/>
        <Users users={users} setUser={(user)=>setUser(user)}/>
      </Route>
      <Route exact path='/user/info'>
        <UserInformation user={user}/>
      </Route>
    </Router>  
  );
}

export default App;
