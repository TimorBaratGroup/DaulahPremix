import React from 'react'
import { Container } from '../../common/index.js'
import { Wrapper, SkillsWrapper } from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLogo(filter: { number: { gt: 0 } }) {
        edges {
          node {
            number
            logo {
              fixed(width: 150) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="clients">
      <h2>OUR CLIENTS</h2>
      <SkillsWrapper as={Container}>
        {data.allContentfulLogo.edges.map((edge, i) => {
          return (
            <ul>
              <Img
                key={i}
                fixed={edge.node.logo.fixed}
                alt={edge.node.number}
              />
            </ul>
          )
        })}
      </SkillsWrapper>
    </Wrapper>
  )
}
