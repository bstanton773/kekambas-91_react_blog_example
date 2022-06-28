import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        this.setState({redirect: true})
    }

    render() {
        return ( this.state.redirect ? <Navigate to='/' /> : (
                <>
                    <h4 className='text-center'>Login Here</h4>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className='from-group'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' className='form-control' placeholder='Enter Username' />

                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' className='form-control' placeholder='Enter Password' />

                            <input type='submit' className='btn btn-primary w-100 mt-3' value='Login' />
                        </div>
                    </form>
                </>
            )
        )
    }
}
