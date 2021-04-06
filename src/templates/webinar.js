import React from 'react';
import Layout from '../layouts/ru';
import SEO from "../components/SEO";
import {graphql} from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function Webinar ({ data, ...props }) {
    const { title } = data.mdx.frontmatter
    const { description } = data.mdx.frontmatter
    const { body } = data.mdx

    return (
        <Layout location={props.location}>
            <SEO
                title={title}
                description={description}
            />
            <h1>Вебинар: {title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query getWebinars($slug: String!) {
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
