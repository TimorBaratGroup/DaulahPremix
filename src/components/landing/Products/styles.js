import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #212121;
  padding: 8rem 8rem 0 8rem;
  background: #d7d7d7;
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  ul {
    background: #f0f0f0;
    right: 0;

    :hover {
      top: 0;
      bottom: 0;
      left: 0;
      right: 100%;
      background: #000099;
      z-index: 0;
      -moz-transition: 0.3s all ease;
      -o-transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      transition: 0.3s all ease;
      cursor: pointer;

      h3 {
        color: white;
      }
    }
  }

  h3 {
    text-align: center;
    padding: 1em 0 0 0;
    height: 35px;
  }

  @media (max-width: 480px) {
    padding: 8rem 0 0 0;

    h2 {
      font-size: 2rem;
    }

    h3 {
      text-align: center;
      padding: 0.5rem 0 0 0;
      height: 17px;
    }
  }
`

export const SkillsWrapper = styled.div`
  padding: 4rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1065px) {
    flex-direction: column;
    padding: 0;
  }
`
