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
          branding
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


const Header = styled.header`
display: flex;
background: black;
height: 66px;
padding: 0 16px;
box-sizing: border-box;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavLink = styled.div`
  margin: auto 0;

  a{
    color: white;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover{
      color: orange;
    }
  }
`;

const Branding = styled.div`
  color: orange;
  font-weight: bold;
  margin: auto 0;
  font-size: 20px;
`;


const Layout = ({ children }) => {
  return (
    <div>
      <Header>
          <StaticQuery 
            query={`${navigationQuery}`}
            render={(data) => {
              console.log(data)
              return (
                <>
                  <Branding>
                    {data.prismic.allNavigations.edges[0].node.branding}
                  </Branding>
                  <NavLinks>
                    {data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
                      return (
                        <NavLink key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>
                            {link.label}
                          </Link>
                        </NavLink>
                      )
                    })}
                  </NavLinks>
                </>
              )
            }}
          />
      </Header>
      <Main>{children}</Main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
