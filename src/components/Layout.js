import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    const header = this.createHeader(location, title)
    const footer = this.createFooter()

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
        {children}
        {footer}
      </div>
    )
  }

  isPrimaryPath(location) {
    return this.isRootPath(location) || this.isPortfolioPath(location)
  }

  isRootPath(location) {
    const rootPath = `${__PATH_PREFIX__}`
    return (
      location.pathname === rootPath || location.pathname === rootPath + '/'
    )
  }

  isPortfolioPath(location) {
    const portfolioPath = `${__PATH_PREFIX__}/portfolio`
    return (
      location.pathname === portfolioPath ||
      location.pathname === portfolioPath + '/'
    )
  }

  createHeader(location, title) {
    let titleElement = this.createTitle(location, title)
    const menuElement = this.createMenu(location)
    return (
      <>
        {titleElement}
        {menuElement}
        <hr style={{ marginBottom: rhythm(1.5) }} />
      </>
    )
  }

  createTitle(location, title) {
    if (this.isPrimaryPath(location)) {
      return this.createLargeTitle(title)
    } else {
      return this.createSmallTitle(title)
    }
  }

  createLargeTitle(title) {
    return (
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
  }

  createSmallTitle(title) {
    return (
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
  }

  createMenu(location) {
    let menuStyle
    if (this.isPrimaryPath(location)) {
      menuStyle = {
        marginBottom: rhythm(1.0),
      }
    } else {
      menuStyle = {
        marginBottom: rhythm(0.75),
      }
    }

    // Underline the selected menu item, if applicable.
    let border = {
      borderBottomWidth: `2px`,
      borderBottomStyle: `solid`,
    }
    let blogBorder = this.isRootPath(location) ? border : undefined
    let portfolioBorder = this.isPortfolioPath(location) ? border : undefined

    return (
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
            ...blogBorder,
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
            ...portfolioBorder,
          }}
          to={`/portfolio`}
        >
          Portfolio
        </Link>
        {' · '}
        <a
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          href={`/resume`}
        >
          Resume
        </a>
      </h4>
    )
  }

  createFooter() {
    return (
      <footer
        style={{
          marginTop: rhythm(2),
        }}
      >
        © {new Date().getFullYear()} Andre Duvoisin
      </footer>
    )
  }
}

export default Layout
