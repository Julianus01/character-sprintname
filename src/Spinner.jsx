import styled from 'styled-components'

const Spinner = () => {
  return (
    <Container>
      <div></div>
      <div></div>
    </Container>
  )
}

export default Spinner

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 44px;
  height: 44px;

  div {
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 18px;
      left: 18px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 36px;
      height: 36px;
      opacity: 0;
    }
  }
`
