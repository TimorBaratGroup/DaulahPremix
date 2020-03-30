import React from 'react'
import { Container } from '../../common/index.js'
import { Wrapper, SkillsWrapper } from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct(sort: { fields: productNumber, order: ASC }) {
        edges {
          node {
            productNumber
            name
            photo {
              fixed(width: 300, height: 200) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="products">
      <h2>OUR PRODUCTS</h2>
      <SkillsWrapper>
        {data.allContentfulProduct.edges.map((edge, i) => {
          return (
            <ul>
              <Img
                key={i}
                fixed={edge.node.photo[0].fixed}
                alt={edge.node.name}
              />
              <h3>{edge.node.name}</h3>
            </ul>
          )
        })}
      </SkillsWrapper>
    </Wrapper>
  )
}
