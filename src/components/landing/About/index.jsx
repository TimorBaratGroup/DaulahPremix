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
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImage(filter: { name: { eq: "jumbo" } }) {
        edges {
          node {
            imageTitle
            description
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      allContentfulHeader(
        filter: { header: { in: ["header1", "header2", "header3"] } }
        sort: { fields: header, order: ASC }
      ) {
        edges {
          node {
            title
            description {
              json
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
          return (
            <Img key={i} fluid={edge.node.image.fluid} alt="DaulahPremix" />
          )
        })}
      </Thumbnail>
      <Jumbotron>
        <h1>
          {data.allContentfulImage.edges[0].node.imageTitle} <br />{' '}
          <p>{data.allContentfulImage.edges[0].node.description}</p>
        </h1>
      </Jumbotron>
      <AboutWrapper>
        <AboutUs>
          <h1>{data.allContentfulHeader.edges[2].node.title}</h1>
          {documentToReactComponents(
            data.allContentfulHeader.edges[2].node.description.json
          )}
        </AboutUs>
        <Quarry>
          <h1>{data.allContentfulHeader.edges[1].node.title}</h1>
          {documentToReactComponents(
            data.allContentfulHeader.edges[1].node.description.json
          )}
        </Quarry>
        <Location>
          <h1>{data.allContentfulHeader.edges[0].node.title}</h1>

          {documentToReactComponents(
            data.allContentfulHeader.edges[0].node.description.json
          )}
        </Location>
      </AboutWrapper>
    </Wrapper>
  )
}
