import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import {
  GameboxStart,
  GameboxJoin,
  StartJoinScreen,
} from "./Components/StartJoin.styles";
import { Modal, Button } from "react-bootstrap";

function StartOrJoinScreen(props) {""
  const [show, setShow] = useState(false);
  const [option, setOption] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [roomCode, setRoomCode] = useState("");

  // The selected game passed from GameSelectionScreen
  const selectedGame = props.location.state;

  const redAlert = () => {
    alert("Let's party!");
  };

  const history = useHistory();

  const routeChangeStart = () => {
    if (!roomCode) {
          alert("Please add a room number");
          return;
      }
    console.log("startGame", roomCode);
    let path = selectedGame;
    history.push(path);
    history.push({
      pathname: path,
      state: {
          roomCode: roomCode,
          player: "p1"
      }
  });
};

const routeChangeJoin = () => {
  if (!roomCode) {
      alert("Please add a room number");
      return;
  }
  console.log("joinRoom", roomCode);
  let path = selectedGame;
  
  history.push({
      pathname: path,
      state: {
          roomCode: roomCode,
          player: "p2"
      }
  });
};

const routeChange = () => {
  console.log(option)
  if (option === 'start'){
    routeChangeStart();
  }
  else if (option === 'join'){
    routeChangeJoin();
  }
}

  //   const routeChangetoTTT = () =>{ 
  //     let path = 'tic-tac-toe'; 
  //     history.push(path);
  // }
  //   const routeChangetoRPS = () =>{ 
  //       let path = 'rock-paper-scissor'; 
  //       history.push(path);
  //   }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <form>
        <input
                  type="text"
                  placeholder="Type Room Number "
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
        />
            <Button variant="primary" onClick={routeChange}>
            Enter
          </Button>
          </form>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      <StartJoinScreen>

         {/* <h1>{selectedGame}</h1> */}

        <GameboxStart onClick={() => {setOption("start"); setShow(true); }}>
          <h1>Start New Game</h1>
        </GameboxStart>

        <GameboxJoin onClick={() => {setOption("join"); setShow(true); }}>
          <h1>Join Game</h1>
               
        </GameboxJoin>
      </StartJoinScreen>
    </>
  );
}

export default StartOrJoinScreen;