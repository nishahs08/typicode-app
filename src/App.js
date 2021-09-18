
import { Container, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar';
import { UserInformation } from './Components/UserInformation';
import { Users } from './Components/Users';
import { UserAlbums } from './Components/UserAlbums'
import { AllPosts } from './Components/AllPosts';
import { AllAlbums } from './Components/AllAlbums';
import { AllTodos } from './Components/AllTodos';
import { UserPosts } from './Components/UserPosts';
import { UserTodos } from './Components/UserTodos';
function App() {
 
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar setUser={setUser}/>
      <Toolbar />
      {!!user ?   <Sidebar user={user} /> : null}
      <Toolbar />

        <Route exact path='/' render={(props) => <Users  {...props} setUser={(user) => setUser(user)} />} />

        <Route exact path='/user/info' render={(props) => <UserInformation {...props} user={user} />} />
       
        <Route exact path='/user/posts' render={(props) => <UserPosts {...props} user={user} />} />
        <Route exact path='/user/todos' render={(props) => <UserTodos {...props} user={user} />} />
        <Route exact path='/user/albums' render={(props) => <UserAlbums user={user} />} />

        <Route exact path='/posts' component={AllPosts}/>
        <Route exact path='/albums' component = {AllAlbums  }/>
        <Route exact path='/todos' component = {AllTodos  }/>

    
    </Router>
  );
}

export default App;
