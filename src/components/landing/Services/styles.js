import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10rem 0 5rem 0;
  position: relative;

  h2 {
    text-align: center;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    padding: 30rem 0 0 0;

    h2 {
      font-size: 2rem;
    }
  }
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem 0rem;
  margin: 2.5rem 3rem;

  div {
    width: 25rem;
    height: 20rem;
    text-align: center;

    img {
      width: 5rem;
    }

    h5 {
      font-size: 2rem;
      margin: 2rem;
    }
    p {
      font-size: 1rem;
      margin: 2rem 1rem 2rem 2rem;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;

    div {
      margin: 2rem 0;
      border: 1px;
      border-color: black;
    }

    @media (max-width: 480px) {
      div {
        margin: 0;

        h5 {
          font-size: 1.5rem;
          margin: 0.5rem;
        }
        p {
          font-size: 1rem;
          margin: 1rem;
        }
      }
    }
  }
`
