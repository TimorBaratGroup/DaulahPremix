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
  }
`

export const AboutUs = styled.div`
  background: #00005b;
  width: 20vw;
  height: 35vh;

  @media (max-width: 1350px) {
    width: 25vw;
  }
`

export const Quarry = styled.div`
  background: #00007a;
  width: 20vw;
  height: 35vh;

  @media (max-width: 1350px) {
    width: 25vw;
  }
`

export const Location = styled.div`
  background: #000099;
  width: 20vw;
  height: 35vh;

  @media (max-width: 1350px) {
    width: 25vw;
  }
`

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 24pt;
    color: #212121;
    text-align: left;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 18pt;
    font-weight: normal;
    line-height: 1.8;
    color: #707070;
    text-align: left;
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
`
