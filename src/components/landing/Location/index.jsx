import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Wrapper, Maps, Address } from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const Location = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImage(
        filter: { name: { in: ["officeMap", "quarryMap"] } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            imageTitle
            description
            address {
              json
            }
            image {
              fixed(width: 950) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="location">
      <Maps>
        {data.allContentfulImage.edges.map((edge, i) => {
          return (
            <div>
              <a
                href={edge.node.description}
                target="_blank"
                rel="noopener norefferer"
              >
                <Img
                  key={i}
                  fixed={edge.node.image.fixed}
                  alt={edge.node.imageTitle}
                />
              </a>
              <Address>
                <h5>{edge.node.imageTitle}</h5>
                <p>{documentToReactComponents(edge.node.address.json)}</p>
              </Address>
            </div>
          )
        })}
      </Maps>
    </Wrapper>
  )
}
