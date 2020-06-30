import React from "react";
import { useHistory } from "react-router-dom";
import { FaRebel } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/button'
// import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  const history = useHistory();

  return (
    <Navbar sticky="top" className="navbar navbar-light bg-dark ">
      <Container className="main d-flex  justify-content-center">
        <h1 className="navbar-brand mb-0 text-warning ml-5 ">
          <FaRebel
            size="30px"
            className="border rounded-circle border-warning mr-2 mb-2"
          />
          Chase Graffeo
        </h1>
      </Container>

     
        
        {/* <Button onClick={() => history.push("/")} className="btn btn-warning">Home</Button> */}
        <Button onClick={() => history.push("/Projects")} className="btn btn-warning">Projects</Button>
     
    </Navbar>
  );
}

export default Navigation;
