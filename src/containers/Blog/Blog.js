import React, { Component } from 'react';
// import axios from 'axios';
import {Route, NavLink, Switch} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {         

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <NavLink  exact to="/">Home</NavLink>
                            <NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
