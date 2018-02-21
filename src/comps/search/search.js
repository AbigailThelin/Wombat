import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Search extends Component{
    render(){
        return(
            <div>
                <Link to='/'><button>go back</button></Link>
            </div>
        )
    }
}