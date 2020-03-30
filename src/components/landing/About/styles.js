import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  color: #212121;
  padding: 0 0 8rem 0;
  text-align: center;
`
export const Jumbotron = styled.div`
  text-align: left;
  font-size: 3.5rem;
  position: absolute;
  top: 25vw;
  left: 20vw;

  h1 {
    font-size: 3.5vw;

    p {
      font-size: 2vw;
    }
  }

  @media (max-width: 1350px) {
    top: 25vw;
    left: 18vw;
  }

  @media (max-width: 480px) {
    top: 35vw;
    left: 10vw;

    h1 {
      font-size: 6.5vw;

      p {
        font-size: 5vw;
      }
    }
  }
`

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  position: absolute;
  top: 32vw;
  left: 20vw;
  right: 20vw;
  color: white;

  h1 {
    font-size: 2vw;
    margin: 2rem;
  }
  p {
    font-size: 0.8vw;
    margin: 2rem 1rem 2rem 2rem;
  }

  @media (max-width: 1350px) {
    top: 32vw;
    left: 18vw;
    right: 18vw;

    h1 {
      font-size: 2.5vw;
      margin: 2rem;
    }
    p {
      font-size: 1vw;
      margin: 2rem 1rem 2rem 2rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    top: 65vw;

    h1 {
      font-size: 4vw;
      margin: 1rem;
      text-align: center;
    }
    p {
      font-size: 3.5vw;
      margin: 0 1rem 1rem 1rem;
    }
  }
`

export const AboutUs = styled.div`
  background: #00005b;
  width: 20vw;
  height: 35vh;

  @media (max-width: 1350px) {
    width: 25vw;

    @media (max-width: 1024px) {
      height: 25vw;

      @media (max-width: 480px) {
        width: 80vw;
        height: 30vw;
        margin-bottom: 1rem;
      }
    }
  }
`

export const Quarry = styled.div`
  background: #00007a;
  width: 20vw;
  height: 35vh;

  @media (max-width: 1350px) {
    width: 25vw;

    @media (max-width: 1024px) {
      height: 25vw;

      @media (max-width: 480px) {
        width: 80vw;
        height: 50vw;
        margin-bottom: 1rem;
      }
    }
  }
`

export const Location = styled.div`
  background: #000099;
  width: 20vw;
  height: 35vh;

  @media (max-width: 1350px) {
    width: 25vw;

    @media (max-width: 1024px) {
      height: 25vw;

      @media (max-width: 480px) {
        width: 80vw;
        height: 55vw;
        margin-bottom: 1rem;
      }
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 16vw;
  }
`
