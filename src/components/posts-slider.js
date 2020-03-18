import React, { Component } from "react"
import { Carousel } from "primereact/carousel"
import { PostService } from "../services/post-service"

class PostsSlider extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
        this.postService = new PostService();
        this.postTemplate = this.postTemplate.bind(this);

        this.responsiveSettings = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
        this.postService.getPosts().then(data => this.setState({posts: data}));
    }

    postTemplate(post) {
        return (
            <div className="flex">
                <h1>{post.title}</h1>
            </div>
        );
    }

    render() {

        return (
            <Carousel 
            value={this.state.posts} 
            itemTemplate={this.postTemplate}
            numVisible={1}
            numScroll={1}
            responsiveOptions={this.responsiveSettings}>
            </Carousel>
        );
    }

}

export default PostsSlider