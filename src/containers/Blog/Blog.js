import React, { Component } from 'react';
// import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {         

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/new-post">New Post</Link>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;
