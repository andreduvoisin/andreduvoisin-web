import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class PortfolioIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const portfolio = data.portfolio

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Portfolio"
          keywords={[`portfolio`, `gatsby`, `javascript`, `react`]}
        />

        {portfolio.edges.map(({ node }) => {
          return (
            <>
              <h1>{node.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <hr
                style={{
                  marginTop: rhythm(2.0),
                  marginBottom: rhythm(2.0),
                }}
              />
            </>
          )
        })}
      </Layout>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    portfolio: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.+/portfolio/.+/" } }
      sort: { fields: [frontmatter___index], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
