import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Container } from '../../../common/index.js'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import Img from 'gatsby-image'

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLogo(filter: { number: { eq: 0 } }) {
        edges {
          node {
            logo {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Wrapper as={Container}>
        <Link to="/">
          {data.allContentfulLogo.edges.map((edge, i) => {
            return (
              <div>
                <Img key={i} fluid={edge.node.logo.fluid} alt="TBB" />
              </div>
            )
          })}
        </Link>
        <NavbarLinks desktop />
      </Wrapper>
    </Wrapper>
  )
}

export default Navbar
