import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #2c2d31;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Maps = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
    flex-direction: column;
  }

  div {
    img:last-child {
      margin-left: 0.15vw;

      @media (max-width: 1903px) {
        margin-left: unset;
      }
    }
  }
`
export const Address = styled.div`
  background-color: #ffffff;
  color: #606060;
  width: 25vw;
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
`
