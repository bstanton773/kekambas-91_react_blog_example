import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function SinglePost() {
    const { postId } = useParams();
    const [ post, setPost ] = useState({});
    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    return (
        <PostCard post={post} />
    )
}
