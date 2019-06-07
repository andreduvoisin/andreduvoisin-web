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

    // TODO: BLOG When you write your first blog, delete this blogsContent and uncomment the blogsContent below.
    const blogsContent = this.createBlogsEmptyState(data.blog)
    // const blogsContent = this.createBlogsList(data.blog)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={undefined} keywords={[`blog`]} />

        <Bio style={{ marginBottom: rhythm(0.5) }} />

        <Socials style={{ marginBottom: rhythm(2.0) }} />

        {blogsContent}
      </Layout>
    )
  }

  // TODO: BLOG When you write your first blog, delete this createBlogsEmptyState() and uncomment the createBlogsList() below.
  createBlogsEmptyState() {
    return (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
        }}
      >
        Blog is coming soon. Check out my{' '}
        <Link to={`/portfolio`}>portfolio</Link>!
      </h3>
    )
  }
  // createBlogsList(blog) {
  //   return blog.edges.map(({ node }) => {
  //     const title = node.frontmatter.title || node.fields.slug
  //     return (
  //       <div key={node.fields.slug}>
  //         <h3
  //           style={{
  //             fontFamily: `Montserrat, sans-serif`,
  //             marginBottom: rhythm(0),
  //             marginTop: rhythm(1.5),
  //           }}
  //         >
  //           <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
  //             {title}
  //           </Link>
  //         </h3>
  //         <small>{node.frontmatter.date}</small>
  //         <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
  //       </div>
  //     )
  //   })
  // }
}

export default BlogIndex

// TODO: BLOG When you write your first blog, delete this pageQuery and uncomment the pageQuery below.
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     blog: allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/.+/blog/.+/" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `
