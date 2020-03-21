import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Features from "../components/features"
import CardGrid from "../components/card-grid"

import BlogPosts from "../components/blog-posts"

import {graphql} from "gatsby"

export default ({ data }) => (

    <div>
        <Header></Header>
        <Navbar></Navbar>
        <BlogPosts data={data.allContentfulBlogPost.edges}></BlogPosts>
        <Features></Features>
        <CardGrid></CardGrid>
    </div>
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