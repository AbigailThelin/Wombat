import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css'
import UserHeader from '../user-header/user-header';
import Carousel from '../carousel/carousel';
import Footer from '../footer/footer';

export default class Home extends Component{
    render(){
        return(
            <div className='home'>

                <div className='header'>
                    <UserHeader/>
                </div>

                <div className='body'>
                    <div className='leftMain'>
                        
                        <p className='head'>Redemable points for honest reviews</p>
                        
                        <input className='searchInput' type='text' placeholder='Search...' />
                        <Link to='/shop'><button>SEARCH</button></Link>

                    </div>

                    <div className='rightMain'>
                        picture
                    </div>
                </div>

                <div className='carouselWrapper'>
                    <Carousel/>
                </div>

                <div className='deals'>

                </div>

                <div className='footer'>
                    <Footer/>
                </div>

            </div>
        )
    }
}