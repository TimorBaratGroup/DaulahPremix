import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #2c2d31;

  @media (max-width: 1899px) {
    flex-direction: column;
    height: 250vh;

    @media (max-width: 480px) {
      height: 130vh;
    }
  }
`

export const Maps = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  flex-wrap: wrap;

  @media (max-width: 1899px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  div {
    width: 49vw;

    img:last-child {
      margin-left: 0.75vw;

      @media (max-width: 1903px) {
        margin-left: unset;

        @media (max-width: 420px) {
          margin-bottom: 2rem;
        }
      }
    }

    @media (max-width: 1899px) {
      width: 100vw;
    }
  }
`
export const Address = styled.div`
  color: #ffffff;
  width: 24vw;
  padding: 1.5rem;
  margin: 2rem auto;

  h5 {
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.5vw;
  }

  p {
    font-weight: bold;
    font-size: 1vw;
  }

  @media (max-width: 620px) {
    background-color: #ffffff;
    color: #606060;
    width: 5vw;
    margin: 0;
    padding: 1rem;

    h5 {
      font-size: 5vw;
    }

    p {
      font-weight: bold;
      font-size: 3.5vw;
    }
  }
`
