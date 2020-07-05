import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Wrapper,
  AboutWrapper,
  AboutUs,
  Quarry,
  Location,
  Thumbnail,
  Jumbotron,
} from './styles'
import Img from 'gatsby-image'

export const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImage(filter: { name: { eq: "jumbo" } }) {
        edges {
          node {
            image {
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
    <Wrapper id="about">
      <Thumbnail>
        {data.allContentfulImage.edges.map((edge, i) => {
          return <Img key={i} fluid={edge.node.image.fluid} alt="TBB" />
        })}
      </Thumbnail>
      <Jumbotron>
        <h1>
          Granite Quarry <br /> <p>Located in Pulai Chondong, Kelantan</p>
        </h1>
      </Jumbotron>
      <AboutWrapper>
        <AboutUs>
          <h1>About Us</h1>
          <p>
            Daulah Premix was established in the year 1972. We are a granite
            quarry located in Pulai Chondong, Kelantan.
          </p>
        </AboutUs>
        <Quarry>
          <h1>Granite Quarry</h1>
          <p>
            Our product consists of granite aggregates crushed to different
            sizes to meet our client's requirements.
            <br />
            <br />
            Crush aggregates are mainly used as raw material to produce
            asphaltic concrete (premix), concrete ready-mix, and so on.
          </p>
        </Quarry>
        <Location>
          <h1>Location</h1>
          <p>
            Our quarry is located at Bukit Buloh, Pulai Chondong, Kelantan.
            <br />
            <br />
            We are a direct neighbour of JKR Kuari Pusat Bukit Buloh.
            <br />
            <br />
            Since the opening of Kota Bharu-Kuala Krai Highway, it only takes
            about 30 minutes drive from Kota Bharu to reach our location.
          </p>
        </Location>
      </AboutWrapper>
    </Wrapper>
  )
}
