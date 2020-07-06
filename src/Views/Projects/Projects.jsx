import React from "react";
import Container from "react-bootstrap/Container";
import { FaRebel } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function Projects() {

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
      <h1 className=" d-flex justify-content-center ">Projects</h1>
      <hr></hr>
      <img id="projpic" src={require("./Mim.png")}  alt=""></img>
      <h2>MIM</h2>
      <a href="http://mim-learning-tool.herokuapp.com/" className="text-warning">
      <h5>http://mim-learning-tool.herokuapp.com/</h5>
      </a>
      <p>
        MIM is an online teaching aid for parents to help teach their 4 to 5 y/o
        during the transition from classroom setting to a home setting during
        COVID-19. It has Alphabet, Number, Vocabulary, and Animal flash cards.
        The Vocabulary cards have their definition and descriptive photos while
        the animal cards have colorful and fun pictures with their definitions.
        It also has a geography section where the child can learn their states
        and detailed state facts. There is also an interactive puzzle and a
        section where children can watch videos of their favorite story books
        being read to them.
      </p>
      <img id="projpic" src={require("./Ghiblis.png")} className="" alt=""></img>
      <h2>Studio Ghibli</h2>
      <a href="http://apighibli.herokuapp.com/" className="text-warning">
      <h5>http://apighibli.herokuapp.com/</h5>
      </a>
      <p>
        This is a simple lab connecting a third-party API to display information
        about the Studio Ghibli franchise. This application displays information
        on both the films and individual actors.
      </p>
      <img id="projpic" src={require("./Tic.png")} className="" alt=""></img>
      <h2>Tic-Tac-Toe</h2>
      <a href="https://chasegraffeo.github.io/tictactoe/" className="text-warning">
      <h5>https://chasegraffeo.github.io/tictactoe/</h5>
      </a>
      <p>
        Using HTML, CSS, and JAVASCRIPT to make a game of Tic-Tac-Toe. creating
        elements with HTML then using CSS to manipulate the element into a
        board. Finally using JAVASCRIPT to add functionality to the game.
      </p>
      <img id="projpic" src={require("./Dicey.jpg")} className="" alt=""></img>
      <h2>Dicey Business</h2>
      <a href="https://chasegraffeo.github.io/diceybusinessTS/" className="text-warning">
      <h5>https://chasegraffeo.github.io/diceybusinessTS/</h5>
      </a>
      <p>
        Dice generator app where you can add and remove dice with the value
        being randomly generated between the numbers of one and six. You can
        roll the dice as well as click a button to see the total value of all
        the displayed die.
      </p>
      <img id="projpic" src={require("./Chirp.png")} className="" alt=""></img>
      <h2>Chirper</h2>
      <a href="https://github.com/chasegraffeo/TS-Chirper" className="text-warning">
      <h5>https://github.com/chasegraffeo/TS-Chirper</h5>
      </a>
      <p>
        Using REACT and knowledge of frontend and backend development to create
        a twitter clone for posting thoughts or “chirps”. Using react-bootstrap,
        JavaScript, Express, React-router-dom, and more we designed and created
        a fully functioning page for posting, deleting, and editing our
        “chirps”.
      </p>
     
    </Container>
    </>
  );
}

export default Projects;
