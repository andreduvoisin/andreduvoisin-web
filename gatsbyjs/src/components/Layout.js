import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    const rootPath = `${__PATH_PREFIX__}/`
    const portfolioPath = `${__PATH_PREFIX__}/portfolio`

    let header
    let menuStyle

    if (location.pathname === rootPath || location.pathname === portfolioPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(0.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
      menuStyle = {
        marginBottom: rhythm(1.0),
      }
    } else {
      header = (
        <h2
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(0.5),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
      menuStyle = {
        marginBottom: rhythm(0.75),
      }
    }

    const menu = (
      <h4
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          ...menuStyle,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Blog
        </Link>
        {' · '}
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/portfolio`}
        >
          Portfolio
        </Link>
        {' · '}
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/AndreDuvoisinResume.pdf`}
        >
          Resume
        </Link>
      </h4>
    )

    const footer = (
      <footer
        style={{
          marginTop: rhythm(2),
        }}
      >
        © {new Date().getFullYear()} Andre Duvoisin
      </footer>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {menu}
        <hr style={{ marginBottom: rhythm(1.5) }} />

        {children}

        {footer}
      </div>
    )
  }
}

export default Layout
