import React, { Component } from 'react';

import './user-header.css'

export default class UserHeader extends Component{
    render(){
        return(
            <div className='user-header'>
                <div className='title'>
                    <p>Wombat</p>
                </div>

                <div className='router'>
                    <p>Write a Review</p>
                    <p>Points</p>
                    <p className='login'>Login</p>
                </div>
            </div>
        )
    }
}