import React, { Component } from 'react';
import { Link } from 'react-router';
import { ROOT } from '../wp-url.js';
export default class MainNavigation extends Component {
    render() {
        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="nav blog-nav">
                        <Link to={ROOT} className="nav-link" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
                        <Link to={ROOT + "/2015/02/some-article"} className="nav-link" activeClassName="active">Some Article</Link>
                        <Link to={ROOT + "/about"} className="nav-link" activeClassName="active">About</Link>
                    </nav>
                </div>
            </div>
        );
    }
}
