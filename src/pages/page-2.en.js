import React from 'react'
import {Link} from "gatsby"
import Layout from "../layouts/en"

const SecondPage = (props) => (
  <Layout location={props.location}>
      <div>
          <h1>Hi from the second page</h1>
          <Link to="../">Go back to the homepage</Link>
      </div>
  </Layout>
)

export default SecondPage
