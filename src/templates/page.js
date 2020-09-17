import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
query PageQuery($id: String){
    prismic {
      allPages(id: $id) {
        edges {
          node {
                title
            _meta {
              id
              uid
            }
          }
        }
      }
    }
  }
`

const Page = (props) => {
    console.log(props)
    return (
        <h1>
            Page
        </h1>
    )
}

export default Page;