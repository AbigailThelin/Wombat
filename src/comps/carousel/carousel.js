import React, { Component } from 'react';

import './carousel.css'

export default class Carousel extends Component{
    render(){
        return(
            <div className='carousel'>
                <div className='one'>
                    <p className='number'>1</p>
                    <p className='info'>Sign up with you email and setup your profile</p>
                </div>

                <div className='two'>
                    <p className='number'>2</p>
                    <p className='info'>As you go to resturants, drop a geo tag and write a review</p>
                </div>

                <div className='three'>
                    <p className='number'>3</p>
                    <p className='info'>After gaining enough points you can redeem them at vendors with deals</p>
                </div>
            </div>
        )
    }
}