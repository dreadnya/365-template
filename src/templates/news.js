import React from 'react';
import Layout from '../layouts/ru';
import SEO from "../components/SEO";
import {graphql} from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function News({ data, ...props }) {
    const { title } = data.mdx.frontmatter
    const { description } = data.mdx.frontmatter
    const { body } = data.mdx

    return (
        <Layout location={props.location}>
            <SEO
                title={title}
                description={description}
            />
            <h1>{title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        description
      }
    }
  }
`
