
import { Container, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {Navbar} from './Components/Navbar'
import { Posts } from './Components/Posts';
import { Sidebar } from './Components/Sidebar';
import { UserInformation } from './Components/UserInformation';
import {Users} from './Components/Users';
import {UserAlbums} from './Components/UserAlbums'
import { Todos } from './Components/Todos';
import { AllPosts } from './Components/AllPosts';
import { AllAlbums } from './Components/AllAlbums';
import { AllTodos } from './Components/AllTodos';
import { UserPosts } from './Components/UserPosts';
import { UserTodos} from './Components/UserTodos';
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
      <Sidebar user={user}/>
      <Container maxWidth='lg'>
        <Toolbar/>
      <Route exact path='/'>
      <Toolbar/>
        <Users users={users} setUser={(user)=>setUser(user)}/>
      </Route>
      <Route exact path='/user/info'>
        <UserInformation user={user}/>
      </Route>
      <Route exact path='/user/posts'>
    
        <UserPosts user={user}/>
      </Route>
      <Route exact path='/user/todos'>
        <UserTodos user={user}/>
      </Route>
      <Route exact path='/user/albums'>
        <UserAlbums  user={user}/>
      </Route>
      <Route exact path='/user/todos'>
        <Todos  user={user}/>
        </Route>
      <Route exact path='/posts'>
        <AllPosts/>
      </Route>
      <Route exact path='/albums'>
        <AllAlbums/>
      </Route>
      <Route exact path='/todos'>
        <AllTodos/>
      </Route>
      </Container>
    </Router>  
  );
}

export default App;
