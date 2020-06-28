import React from "react";
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { TiSocialInstagram } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTwitch } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';


function Home() {
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
          <AiFillFacebook size="30px" />
          <a href="https://www.facebook.com/chase.graffeo.7" className="d-flex justify-content-center text-warning ">
            <h4>Want to be Friends</h4>
          </a>
        </Card.Body>
      </Card>
    </Container>
    <br></br>
   <Container className="main d-flex justify-content-center">
   <Card className="card " style={{ width: 600 }}>
     <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary " >
       <TiSocialInstagram size="30px" />
       <a href="https://www.instagram.com/chasegraffeo/" className="d-flex justify-content-center text-warning">
         <h4>My Instagram</h4>
       </a>
     </Card.Body>
   </Card>
 </Container>
 <br></br>
<Container className="main d-flex justify-content-center">
      <Card className="card" style={{ width: 600 }}>
        <Card.Body className="card-body d-flex justify-content-center text-warning bg-secondary" >
          <TiSocialInstagram size="30px" />
          <a href="https://www.instagram.com/graffeophotos/" className="d-flex justify-content-center text-warning" >
            <h4> My Photography</h4>
          </a>
        </Card.Body>
      </Card>
    </Container>
    <br></br>
    <Container className="main d-flex justify-content-center">
    <Card className="card" style={{ width: 600 }}>
        <Card.Body className=" d-flex justify-content-center text-warning bg-secondary">
            <FaTwitch size="30px" />
            <a href="https://www.twitch.tv/diamondart" className="d-flex justify-content-center text-warning" >
                <h4>My Twitch</h4>
            </a>
        </Card.Body>
    </Card>
</Container>
<br></br>
</>
  );
}

export default Home;
