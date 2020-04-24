import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About Me - Emanuel Canova" />
    <h1>About Me</h1>
    <p>Welcome to About Me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
