import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Game from '../Game'
import Result from '../Result'
import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  ScoreCard,
  GameHeader,
  Score,
  ScoreCount,
  P,
  GameContainer,
  GameImagesContainer,
  RulesButton,
  RulesImage,
  RulesCloseButton,
  RulesContainer,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    yourChoice: '',
    opponentChoice: '',
    playing: true,
    result: '',
  }

  selectChoice = choiceId => {
    const {choicesList} = this.props

    const opponentChoice = choicesList[Math.floor(Math.random() * 3)].id

    let resultant = ''

    if (choiceId === opponentChoice) {
      resultant = 'DRAW'
    } else if (
      (choiceId === 'PAPER' && opponentChoice === 'ROCK') ||
      (choiceId === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (choiceId === 'ROCK' && opponentChoice === 'SCISSORS')
    ) {
      resultant = 'WON'
    } else {
      resultant = 'LOSE'
    }

    if (resultant === 'WON') {
      this.setState(preState => ({score: preState.score + 1}))
    } else if (resultant === 'LOSE') {
      this.setState(preState => ({score: preState.score - 1}))
    }

    this.setState({
      yourChoice: choiceId,
      playing: false,
      opponentChoice,
      result: resultant,
    })
  }

  getGame = () => {
    const {choicesList} = this.props

    return (
      <GameImagesContainer>
        {choicesList.map(eachChoice => (
          <Game
            details={eachChoice}
            key={eachChoice.id}
            selectChoice={this.selectChoice}
          />
        ))}
      </GameImagesContainer>
    )
  }

  playAgain = () => {
    this.setState({playing: true})
  }

  getResultView = () => {
    const {yourChoice, opponentChoice, result} = this.state
    const {choicesList} = this.props

    const yourChoiceObject = choicesList.filter(
      eachItem => eachItem.id === yourChoice,
    )
    const opponentChoiceObject = choicesList.filter(
      eachItem => eachItem.id === opponentChoice,
    )

    return (
      <Result
        yourChoice={yourChoiceObject}
        opponentChoice={opponentChoiceObject}
        result={result}
        playAgain={this.playAgain}
        getScore={this.getScore}
      />
    )
  }

  getGameView = () => {
    const {playing} = this.state

    const gameView = playing === true ? this.getGame() : this.getResultView()

    return gameView
  }

  render() {
    const {score} = this.state

    return (
      <MainContainer>
        <ScoreCard>
          <GameHeader>
            Rock <br /> Paper <br /> Scissors
          </GameHeader>
          <Score>
            <P>Score</P>
            <ScoreCount>{score}</ScoreCount>
          </Score>
        </ScoreCard>
        <GameContainer>{this.getGameView()}</GameContainer>
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <RulesContainer>
              <RulesCloseButton
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </RulesCloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="Rules"
              />
            </RulesContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
