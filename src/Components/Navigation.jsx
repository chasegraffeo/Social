import React from "react";
import { useHistory } from "react-router-dom";
import { FaRebel } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//import Button from 'react-bootstrap/button'
import NavDropdown from "react-bootstrap/NavDropdown";

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

      <NavDropdown title="More" id="dropdown">
        <NavDropdown.Item className="text-warning" onClick={() => history.push("/")} id="item">
          HOME
        </NavDropdown.Item>
        <NavDropdown.Item className="text-warning"  onClick={() => history.push("/Resume")} id="item">
          RESUME
        </NavDropdown.Item>
        <NavDropdown.Item className="text-warning"  onClick={() => history.push("/Projects")} id="item">
          PROJECTS
        </NavDropdown.Item>
        
        {/* <Button onClick={() => history.push("/")} className="btn btn-warning">Home</Button> */}
        {/* <Button onClick={() => history.push("/Views/Resume/Resume")} className="btn btn-warning">Resume</Button> */}
      </NavDropdown>
    </Navbar>
  );
}

export default Navigation;
