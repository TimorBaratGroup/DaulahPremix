import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 8rem 0 0 0;
  background: #d7d7d7;
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  ul {
    right: 0;
  }

  @media (max-width: 680px) {
    padding: 10rem 0 10rem 0;
  }
`

export const SkillsWrapper = styled.div`
  padding: 4rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
