import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Socials from '../components/Socials'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const blog = data.blog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Bio style={{ marginBottom: rhythm(0.5) }} />

        <Socials style={{ marginBottom: rhythm(2.0) }} />

        {blog.edges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(0),
                  marginTop: rhythm(1.5),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.+/blog/.+/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
