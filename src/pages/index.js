import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
// import Features from "../components/features"
// import CardGrid from "../components/card-grid"

// import BlogPosts from "../components/blog-posts"

import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <Hero />
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "D MMMM, YYYY", locale: "es")
        }
      }
    }
  }
`
