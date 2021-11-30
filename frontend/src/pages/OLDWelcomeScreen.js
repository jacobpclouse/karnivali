import React from "react";
import { ReactDOM } from "react";
import { useHistory } from 'react-router-dom';
import StartOrJoinScreen from "./StartOrJoinScreen.js";
import { StartButton, WelcomeWindow, WelcomeColumnLeft, WelcomeColumnRight } from "../styles/Welcome.styles";
import Navbar from "../Navbar";

import tvSVG from '../images/hotPinkTV.svg';


function WelcomeScreen(props) {

    const history = useHistory();

    const routeChange = () => {
        let path = 'game-selection';
        const userDetails = {
            username: props.location.state.username,
            isGuest: props.location.state.isGuest
        }
        history.push(path, userDetails);
    }

    if (props.location.state.isGuest) {
        return (
            <div>
                <Navbar state={props.location} />

                <WelcomeWindow>
                    <WelcomeColumnLeft>
                        <h1>
                            Welcome to Karnivali!
                        </h1>

                        <StartButton hoverColor='rgb(88, 24, 69, 0.7)' onClick={routeChange}>
                            Click Here to Start!
                        </StartButton>
                    </WelcomeColumnLeft>
                        
                    <WelcomeColumnRight>
                        <img src={tvSVG} width='60%'></img>
                    </WelcomeColumnRight>
                </WelcomeWindow>

            </div>
        );
    } else {
        return (
            <div>
                <Navbar state={props.location} />

                <WelcomeWindow>
                    <h1>
                        Hi {props.location.state.username}, Welcome to Karnivali!
                    </h1>

                    <StartButton hoverColor='rgb(73, 11, 150, 0.7)' onClick={routeChange}>
                        Click Here to Start!
                    </StartButton>
                </WelcomeWindow >
            </div>

        );
    }

}

export default WelcomeScreen;