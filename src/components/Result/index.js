import {
  ResultsContainer,
  ResultImage,
  ResultImageContainer,
  ChoicesContainer,
  PlayAgainButton,
  ResultText,
} from './styledComponent'

const Result = props => {
  const {yourChoice, opponentChoice, result, playAgain} = props

  const reloadGame = () => playAgain()

  const resultText = result === 'DRAW' ? 'IT IS DRAW' : `YOU ${result}`

  return (
    <ResultsContainer>
      <ChoicesContainer>
        <ResultImageContainer>
          <h1>You</h1>
          <ResultImage src={yourChoice[0].imageUrl} alt="your choice" />
        </ResultImageContainer>
        <ResultImageContainer>
          <h1>Opponent</h1>
          <ResultImage src={opponentChoice[0].imageUrl} alt="opponent choice" />
        </ResultImageContainer>
      </ChoicesContainer>
      <ResultText>{resultText}</ResultText>
      <PlayAgainButton type="button" onClick={reloadGame}>
        PLAY AGAIN
      </PlayAgainButton>
    </ResultsContainer>
  )
}
export default Result
