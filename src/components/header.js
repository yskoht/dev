import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ isTop, siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        visibility: isTop ? `hidden` : `visible`,
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

Header.propTypes = {
  isTop: PropTypes.bool,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  isTop: false,
  siteTitle: ``,
}

export default Header
