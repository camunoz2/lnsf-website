import React from "react"
import Layout from "../components/layout"
// import Features from "../components/features"
// import CardGrid from "../components/card-grid"

// import BlogPosts from "../components/blog-posts"

import {graphql} from "gatsby"

export default ({ data }) => (

    <Layout>
    </Layout>
)


export const query = graphql`
    query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
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