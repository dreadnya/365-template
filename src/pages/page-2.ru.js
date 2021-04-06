import React from 'react'
import {Link} from "gatsby"
import Layout from "../layouts/ru"

const SecondPage = (props) => (
  <Layout location={props.location}>
      <div>
          <h1>Ты на второй странице!</h1>
          <Link to="../">Перейти на главную</Link>
      </div>
  </Layout>
)

export default SecondPage