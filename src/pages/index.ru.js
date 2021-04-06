import React from 'react'
import {graphql, Link} from "gatsby"
import Layout from "../layouts/ru"
import SEO from "../components/SEO";
import NewsList from "../components/NewsList";
import WebinarList from "../components/WebinarsList";

const IndexPage = (props) => {
    let mdxArray = props.data.allMdx.edges.map(p => p.node)
    let newsArray = mdxArray.filter(el => el.frontmatter.category === 'news')
    let webinarsArray = mdxArray.filter(el => el.frontmatter.category === 'webinars')

    return(
        <Layout location={props.location}>
            <SEO title={"Главная"}/>
            <div>
                <h1>Здорова</h1>
                <p>Добро пожаловать на новый сайт ELMA365.</p>
                <Link to="page-2">На вторую страницу</Link>
                <br/>
                <br/>
                <hr/>
                <br/>
                <h2>Новости</h2>
                <NewsList
                    posts={newsArray}
                />
                <br/>
                <h2>Вебинары</h2>
                <WebinarList
                    posts={webinarsArray}
                />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query allNews {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            lang
            category
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
