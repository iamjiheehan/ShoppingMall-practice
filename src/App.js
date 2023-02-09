import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js';
import Shoes from './Components/shoes';
import {Custom} from './Components/Custom';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  const [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chanel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Clothes">Clothes</Nav.Link>
            <Nav.Link href="#pricing">Bags</Nav.Link>
            <Nav.Link href="#Shoes">Shoes</Nav.Link>
            <Nav.Link href="#Acc">Acc</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
        {
          data.map((item, i) => {
            return(
                <div className='list' key={i}>
                      <Shoes
                        image={item.image}
                        title={item.title}
                        content={item.content}
                        price={item.price}
                      />
                </div>
                )
            })
          }
      {/* <Routes>
        <Route path="/detail" element = {<div>상세페이지임</div>} />
        <Route path="/about" element = {<div>어바웃페이지임</div>} />
      </Routes> */}
    </div>
  );
}
export default App;
