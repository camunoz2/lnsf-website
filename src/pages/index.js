import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import BlogPosts from "./blog-posts"

// import PostsSlider from "../components/posts-slider"

export default ({ data }) => (

    <div>
        <Header></Header>
        <Navbar></Navbar>
        <BlogPosts data={data.allContentfulBlogPost.edges}></BlogPosts>
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