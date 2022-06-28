import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreatePost(props) {
    let navigate = useNavigate();

    const { loggedIn } = props;
    const { flashMessage } = props;

    useEffect(() => {
        if (!loggedIn){
            flashMessage('You must be logged in to create a post', 'danger');
            navigate('/login')
        }
    }, [loggedIn, flashMessage, navigate])

    return (
        <h4 className='text-center'>Create Your Own Post</h4>
    )
}
