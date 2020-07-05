import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 3rem 0 1rem 0;
  background-size: cover;
  background-position: top;
  background-color: #2c2d31;
  position: sticky;

  @media (max-width: 480px) {
    padding: 1.2rem 0 1rem 0;
  }
`

export const Details = styled.div`
  width: 30vw;
  color: white;
  font-size: 18px;
  margin: 1rem auto;

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 80vw;
    font-size: 12px;
  }
`
