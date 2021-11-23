import { Panel, SelectionPanel } from "../styles/GameSelection.styles";
import { useHistory } from 'react-router-dom';
import ticTacToeImage from '../images/tic-tac-toe.png';
import RockPaperScissorsImage from '../images/rock-paper-scissors.png';
import mineSweeperImage from '../images/minesweeper USE THIS ONE.svg';

function GameSelectionScreen(props) {
    // const { isGuest, username } = props.location.state
    const history = useHistory();

    const routeChange = (game) => {
        // TODO: once the logic for page flow has been sorted, this should pass the game selection to the start or joing page
        let path = 'start-or-join';
        history.push({
            pathname: path,
            state: game
        });
    }

    return (
        <div>
            {/* <Navbar state={props.location} /> */}
            <SelectionPanel>
                <Panel hoverColor='#ff124f' onClick={() => routeChange('tic-tac-toe')}>
                    <img src={ticTacToeImage} height='60%'></img>
                    <h1>TicTacToe</h1>
                </Panel>
                <Panel hoverColor='#7a04eb' onClick={() => routeChange('rock-paper-scissor')}>
                    <img src={RockPaperScissorsImage} height='60%'></img>
                    <h1>Rock Paper Scissors</h1>
                </Panel>

                <Panel hoverColor='#ff00a0' onClick={() => routeChange('minesweeper')}>
                    <img src={mineSweeperImage} height='60%'></img>
                    <h1>4D Minesweeper</h1>

                </Panel>
            </SelectionPanel>
        </div>

    );
}
export default GameSelectionScreen;