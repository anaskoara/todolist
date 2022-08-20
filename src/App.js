
import './App.css';
import { useEffect, useState } from 'react';
import authService from './services/authservice';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar,Nav,Container,} from 'react-bootstrap';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Private from './components/PrivatePosts';

function App() {
  const[currentUser,setCurrentUser]=useState(undefined);

  useEffect(()=>{
      const user=authService.getCurrentUser();
      if(user){
        setCurrentUser(user);
      }
      
  },[]);

  const logout= ()=>{
    authService.logout();
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {currentUser&&<Nav.Link href="/private">Privat</Nav.Link>}
            {currentUser?
                <Nav.Link href="/logout" onClick={logout}>logout</Nav.Link>:
                <><Nav.Link href="/login">login</Nav.Link>
                <Nav.Link href="/signup">signup</Nav.Link></>
            }
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/private" element={<Private/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
        </Routes>
      </Container>
    </div>
  );
}

export default App;
