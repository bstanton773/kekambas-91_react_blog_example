import React, { Component } from 'react'
import PostCard from '../components/PostCard';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://kekambas-blog.herokuapp.com/blog/posts')
            .then(res => res.json())
            .then(data => this.setState({posts:data}))
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Kekambas Blog</h1>
                <hr></hr>
                {this.state.posts.map(p => <PostCard post={p} key={p.id} />)}
            </>
        )
    }
}
