import React from "react"
import { Link } from "gatsby"
import Lastest from '../components/Lastest'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Lastest/>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
