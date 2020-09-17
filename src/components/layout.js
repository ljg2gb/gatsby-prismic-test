import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import styled from 'styled-components';

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto
`

const Layout = ({ children }) => {
  

  return (
    <div>
        <Main>{children}</Main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
