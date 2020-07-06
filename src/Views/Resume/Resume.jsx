import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaRebel } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";


function Resume() {

    const history = useHistory();

    return (
        <>
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
        <Button onClick={() => history.push("/")} className="btn btn-warning">Home</Button>
        </Navbar >
            <Container className="main">

                <h1 className="d-flex justify-content-center">Chase Graffeo</h1>
                <p className="d-flex justify-content-center">Phone:205-249-4304</p>
                <p className="d-flex justify-content-center">chasegraffeo2@gmail.com · www.linkedin.com/in/chasegraffeo · www.github.com/chasegraffeo</p>
                <hr></hr>
                <h2>Summary</h2>
                <p>Certified full-stack web developer with expertise in customer service, communication, and organization. Skilled in problem-solving, as well as being a driven, personable, and teachable team member.</p>
                <hr></hr>
                <h2>Experience:</h2>
                <h5>2019 – CURRENT</h5>
                <h4>FRONT DESK, BESTWESTERN HOTEL & SUITES</h4>
                <p>Checking in guests and making sure the property and rooms are always in full working order. Customer service, checking in/out guests, answering phones, filing paperwork, and making sure all clients’ needs are fully met with a smile.</p>
                <h5>2016 – 2019</h5>
                <h4>DELI CLERK, PUBLIX</h4>
                <p>Focus on taking care of the customer and maintaining constant quality control of the product while preparing it fresh daily. Cooking and preparing food, maintaining sales floor, ordering supplies, customer service, receiving orders, aiming for premiere quality food and service.</p>
                <hr></hr>
                <h2>Education</h2>
                <h5>April 2020</h5>
                <h4>SOFTWARE DEVELOPMENT CERTIFICATION, INNOVATE BIRMINGHAM</h4>
                <p>Innovate Birmingham 14 week Software Development Bootcamp to study to become a full stack Software Developer.</p>
                <hr></hr>
                <h2>Certification</h2>
                <h5>June 2020-June 2021</h5>
                <h4>Licensed Scrum Master, Scrum Inc.</h4>
                <p>LSM-0933328</p>
                <hr></hr>
                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>SQL</li>
                    <li>REACT JS</li>
                    <li>NODE JS</li>
                    <li>TYPESCRIPT</li>
                    <li>REACT NATIVE</li>
                    <li>DOM</li>
                    <li>BOOTSTRAP</li>
                    <li>EXPRESS JS</li>
                    <li>CUSTOMER SERVICE</li>
                    <li>SCRUM MASTER TRAINIG</li>
                    <li>SCRUM PRODUCT OWNER TRAINING</li>
                </ul>
            </Container>
            </>
           
        
    )
}

export default Resume;