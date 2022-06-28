import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function SinglePost() {
    const { postId } = useParams();
    const [ post, setPost ] = useState({});
    const [ editMode, setEditMode ] = useState(false);

    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            <PostCard post={post} />
            <button className='btn btn-info w-50' onClick={()=>{setEditMode(!editMode)}}>Edit</button>
            <button className='btn btn-danger w-50' onClick={()=>{}}>Delete</button>
            {editMode ? (
                <form onSubmit={handleSubmit} className='mt-5'>
                    <div className='from-group'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' className='form-control' defaultValue={post.title} />

                        <label htmlFor='content'>Content</label>
                        <input type='text' name='content' className='form-control' defaultValue={post.content} />

                        <input type='submit' className='btn btn-primary w-100 mt-3' value='Edit Post' />
                    </div>
                </form>
            ) : null}
        </>
    )
}
