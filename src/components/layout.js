import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from 'styled-components';

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto
`

const navigationQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          navigation_links {
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
            label
          }
        }
      }
    }
  }
}`

const NavLink = styled.div``;

const Layout = ({ children }) => {
  return (
    <div>
        <StaticQuery 
          query={`${navigationQuery}`}
          render={(data) => {
            console.log(data)
            return data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
              return <NavLink key={link.link._meta.uid}>
                <Link to={`/${link.link._meta.uid}`}>
                  {link.label}
                </Link>
              </NavLink>
            })
          }} 
        />
        <Main>{children}</Main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
