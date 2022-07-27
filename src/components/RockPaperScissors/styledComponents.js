import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  color: #ffffff;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 3% 10%;
  }
  font-family: 'Bree Serif';
`
export const ScoreCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffffff;
  padding: 5px 20px;
  border-radius: 10px;
  width: 100%;
`
export const GameHeader = styled.h1`
  font-size: 22px;
  margin: 0px;
  font-weight: normal;
`

export const Score = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  width: 120px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
`

export const ScoreCount = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
`
export const P = styled.p`
  margin: 0px;
  font-size: 18px;
`
export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const GameImagesContainer = styled.ul`
  text-align: center;
  list-style: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 768px) {
    width: 450px;
  }
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  align-self: flex-end;
  width: 80px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`
export const RulesImage = styled.img`
  width: 100%;
  padding: 2% 10%;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RulesCloseButton = styled.button`
  background-color: lightgrey;
  padding: 8px;
  border: none;
  align-self: flex-end;
  justify-self: flex-end;
`
