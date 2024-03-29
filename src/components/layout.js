/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ isTop, children }) => {
  return (
    <>
      <Header isTop={isTop} siteTitle={"←"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--space-1) var(--size-gutter) var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <hr />
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <div>
            GitHub:
            <a
              href="https://github.com/yskoht"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              yskoht
            </a>
          </div>
          <div>
            Twitter:
            <a
              href="https://twitter.com/_yskoht"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              @_yskoht
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  isTop: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
