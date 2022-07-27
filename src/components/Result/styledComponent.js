import styled from 'styled-components'

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-family: 'Roboto';
`
export const ChoicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ResultImageContainer = styled.div`
  width: 40%;
  text-align: center;
`
export const ResultImage = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 60%;
  }
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`

export const ResultText = styled.p`
  font-size: 35px;
  font-weight: bold;
`
