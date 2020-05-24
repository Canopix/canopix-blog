import React from "react"
import Talk from "../components/Talk"
import data from "../data/talks"
import Layout from "../components/layout"

const Talks = () => {
  return (
    <Layout>
      {data.map(talk => (
        <Talk talk={talk} />
      ))}
    </Layout>
  )
}

export default Talks
