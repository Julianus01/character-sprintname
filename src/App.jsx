import { useState } from 'react'
import styled from 'styled-components'
import { MOVIES } from './MOVIES'
import Spinner from './Spinner'

const wait = (time = 3000) =>
  new Promise((resolve) => setTimeout(resolve, time))

const App = () => {
  const [pick, setPick] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const randomPick = async () => {
    setIsLoading(true)
    await wait()
    const moviePick = MOVIES[Math.floor(Math.random() * MOVIES.length)]
    setPick(moviePick)
    setIsLoading(false)
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>DECIDE YOUR SPRINT FATE</Title>

          <PickContainer>
            {!Boolean(pick) && !isLoading && (
              <Button onClick={randomPick}>Random Pick</Button>
            )}

            {isLoading && <Spinner />}

            {Boolean(pick) && (
              <Pick>
                Your sprint name is <Gold>{pick}</Gold>
              </Pick>
            )}
          </PickContainer>
        </HeaderContent>
      </Header>

      <Content>
        {MOVIES.map((movie) => (
          <Movie key={movie}>{movie}</Movie>
        ))}
      </Content>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

const HeaderContent = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 100px 40px;
  padding-bottom: 0px;
  backdrop-filter: blur(3px);
  background-image: linear-gradient(
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0.7)
  );
`

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 100px 40px;
  padding-top: 350px;
`

const Title = styled.h1`
  font-size: 64px;
`

const Button = styled.button`
  background: black;
  border: 0;
  border-radius: 0;
  font-weight: bold;
  color: white;
  width: 200px;
  padding: 16px 0;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  :hover {
    transform: scale(1.02);
  }

  :active {
    transform: scale(1);
  }
`

const Movie = styled.p`
  font-size: 28px;
  color: #888;
`

const PickContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 20px;
  }
`

const Pick = styled.p`
  font-weight: bold;
  font-size: 32px;
  margin: 0;
`

const Gold = styled.span`
  color: #dac292;
`
