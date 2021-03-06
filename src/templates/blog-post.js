import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

import { DiscussionEmbed } from 'disqus-react'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    const title = this.createTitle(post.frontmatter.title)
    const date = this.createDate(post.frontmatter.date)
    const content = this.createContent(post.html)

    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        {title}
        {date}
        {content}
        <hr style={{ marginBottom: rhythm(1) }} />
        <Bio style={{ marginBottom: rhythm(2) }} />

        <DiscussionEmbed
          shortname={this.props.data.site.siteMetadata.disqus.shortName}
          config={disqusConfig}
        />
      </Layout>
    )
  }

  createTitle(title) {
    return <h1>{title}</h1>
  }

  createDate(date) {
    return (
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {date}
      </p>
    )
  }

  createContent(html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }
}

export default BlogPostTemplate

// TODO: BLOG When you write your first blog, uncomment this.
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         disqus {
//           shortName
//         }
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `
