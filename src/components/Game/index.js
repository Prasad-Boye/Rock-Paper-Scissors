import {GameImage, GameImageContainer, ImageButton} from './styledComponents'

const Game = props => {
  const {details, selectChoice} = props
  const {imageUrl, id} = details
  const setChoice = () => selectChoice(id)

  let dataTestId = ''

  switch (id) {
    case 'PAPER':
      dataTestId = 'paperButton'
      break
    case 'ROCK':
      dataTestId = 'rockButton'
      break
    case 'SCISSORS':
      dataTestId = 'scissorsButton'
      break

    default:
      dataTestId = null
      break
  }

  return (
    <GameImageContainer>
      <ImageButton onClick={setChoice} data-testid={dataTestId}>
        <GameImage src={imageUrl} alt={id} />
      </ImageButton>
    </GameImageContainer>
  )
}

export default Game
