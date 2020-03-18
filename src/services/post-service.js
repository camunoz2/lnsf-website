import axios from "axios"

export class PostService {
    getPosts() {
        return axios.get(
            'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=98740e4b16bb4c168bc427541afb755e').then(res => res.data.articles);
    }
}