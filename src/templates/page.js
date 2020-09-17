import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

export const query = graphql`
query PageQuery($id: String){
    prismic {
      allPages(id: $id) {
        edges {
          node {
            _meta {
              id
              uid
            }
            page_title
            content
          }
        }
      }
    }
  }`

const Page = (props) => {
    console.log(props)
    const data = props.data.prismic.allPages.edges[0].node
    const pageTitle = data.page_title
    const content = data.content
    return (
        <div>
            <RichText render={pageTitle} />
            <RichText render={content} />
        </div>
    )
}

export default Page;