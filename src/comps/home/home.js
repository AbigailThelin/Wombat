import React, { Component } from 'react';

import './home.css'
import UserHeader from '../user-header/user-header';
import Footer from '../footer/footer'

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

                    </div>

                    <div className='rightMain'>
                        picture duh
                    </div>
                </div>

                <div className='footer'>
                    <Footer/>
                </div>

            </div>
        )
    }
}