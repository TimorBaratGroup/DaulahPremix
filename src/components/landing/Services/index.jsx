import React from 'react'
import { Container } from '../../common/index.js'
import { graphql, useStaticQuery } from 'gatsby'
import { Wrapper, Grid } from './styles.js'
import Img from 'gatsby-image'

export const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImage(
        filter: { name: { in: ["service1", "service2", "service3"] } }
      ) {
        edges {
          node {
            imageTitle
            description
            image {
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
    <Wrapper as={Container} id="services">
      <h2>OUR SERVICES</h2>
      <Grid>
        <div>
          <Img
            key={data.allContentfulImage.edges[2].node.imageTitle}
            fixed={data.allContentfulImage.edges[2].node.image.fixed}
            alt={data.allContentfulImage.edges[2].node.imageTitle}
          />
          <h5>{data.allContentfulImage.edges[2].node.imageTitle}</h5>
          <p>{data.allContentfulImage.edges[2].node.description}</p>
        </div>
        <div>
          <Img
            key={data.allContentfulImage.edges[1].node.imageTitle}
            fixed={data.allContentfulImage.edges[1].node.image.fixed}
            alt={data.allContentfulImage.edges[1].node.imageTitle}
          />
          <h5>{data.allContentfulImage.edges[1].node.imageTitle}</h5>
          <p>{data.allContentfulImage.edges[1].node.description}</p>
        </div>
        <div>
          <Img
            key={data.allContentfulImage.edges[0].node.imageTitle}
            fixed={data.allContentfulImage.edges[0].node.image.fixed}
            alt={data.allContentfulImage.edges[0].node.imageTitle}
          />
          <h5>{data.allContentfulImage.edges[0].node.imageTitle}</h5>
          <p>{data.allContentfulImage.edges[0].node.description}</p>
        </div>
      </Grid>
    </Wrapper>
  )
}
