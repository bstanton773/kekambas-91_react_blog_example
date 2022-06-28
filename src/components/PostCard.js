import React from 'react'

export default function PostCard({ post }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{ post.title }</h5>
                <h6 className='card-subtitle mb-2 text-muted'>By: { post.author.username }</h6>
                <p className='card-text'>{ post.content }</p>
            </div>
        </div>
    )
}
