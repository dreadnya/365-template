import React from 'react'
import {Link} from "gatsby"
import Layout from "../layouts/en"
import SEO from "../components/SEO";

const IndexPage = (props) => (
  <Layout location={props.location}>
      <SEO title={"Main page"}/>
      <div>
          <h1>Hi people</h1>
          <p>Welcome to your new ELMA365 site.</p>
          <Link to="page-2">Go to page 2</Link>
      </div>
  </Layout>
)

export default IndexPage
