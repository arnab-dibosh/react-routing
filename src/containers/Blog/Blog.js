import React, { Component } from 'react';
// import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {         

    state={
        auth:true
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <NavLink  exact to="/posts">Home</NavLink>
                            <NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    {this.state.auth? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={()=><h1>Not Found!</h1>}/>
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
