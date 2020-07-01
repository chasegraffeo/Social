import React from "react";
import { TiDocumentText } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';


function Home() {

  const history = useHistory()

  return (
    <>
    <br></br>
    <Container className="container">
    <div className="text-center">
        <img id="pic" src={require("../Image/me.jpg")} className="rounded-circle" alt=""></img>
    </div>
    <br></br>
    <p className="d-flex justify-content-center text-warning">My name is Chase Graffeo I'm a Fullstack Software Developer and single Father.<br></br> I enjoy spending time with my son, video games, anime, traveling and all food. </p>
</Container>
<br></br>
 <Container className="main d-flex justify-content-center">
 <Card className="card" style={{ width: 600 }}>
     <Card.Body className=" d-flex justify-content-center text-warning bg-secondary">
         <AiFillLinkedin size="30px" />
         <a href="https://www.linkedin.com/in/chasegraffeo/" className="d-flex justify-content-center text-warning" >
             <h4>My Linkedin</h4>
         </a>
     </Card.Body>
 </Card>
</Container>
<br></br>
     <Container className="main d-flex justify-content-center">
     <Card className="card" style={{ width: 600 }}>
       <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary">
         <AiFillGithub size="30px" />
         <a href="https://github.com/chasegraffeo" className="d-flex justify-content-center text-warning">
           <h4>Visit my Github</h4>
         </a>
       </Card.Body>
     </Card>
   </Container>
   <br></br>
<Container className="main d-flex justify-content-center">
      <Card className="card" style={{ width: 600 }}>
        <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary  ">
          <TiDocumentText size="30px" />
          <a onClick={() => history.push("/Resume")} href="..." className="d-flex justify-content-center text-warning ">
            <h4>Resume</h4>
          </a>
        </Card.Body>
      </Card>
    </Container>
    <br></br>
</>
  );
}

export default Home;
