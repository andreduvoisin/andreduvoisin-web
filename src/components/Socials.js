import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SocialIcon } from 'react-social-icons'

function Socials({ style }) {
  return (
    <StaticQuery
      query={socialsQuery}
      render={data => {
        const { social } = data.site.siteMetadata

        const size = {
          height: 50,
          width: 50,
        }
        const boxShadow = `none`
        const marginRight = 10

        return (
          <div
            style={{
              display: `flex`,
              ...style,
            }}
          >
            <SocialIcon
              url={`https://twitter.com/${social.twitter}`}
              network="twitter"
              style={{
                ...size,
                boxShadow,
                marginRight,
              }}
            />
            <SocialIcon
              url={`https://www.linkedin.com/in/${social.linkedin}`}
              network="linkedin"
              style={{
                ...size,
                boxShadow,
                marginRight,
              }}
            />
            <SocialIcon
              url={`https://github.com/${social.github}`}
              network="github"
              style={{
                ...size,
                boxShadow,
                marginRight,
              }}
              bgColor="#000000"
              fgColor="#ffffff"
            />
            <SocialIcon
              url={`mailto:${social.email}`}
              network="email"
              style={{
                ...size,
                boxShadow,
              }}
              bgColor="#000000"
              fgColor="#ffffff"
            />
          </div>
        )
      }}
    />
  )
}

const socialsQuery = graphql`
  query SocialsQuery {
    site {
      siteMetadata {
        social {
          twitter
          linkedin
          github
          email
        }
      }
    }
  }
`

export default Socials
