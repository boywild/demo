import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,Switch
} from 'react-router-dom'

import Frame from 'layout/frame/Frame';

require('semantic/dist/semantic.min.css');
require('semantic/dist/semantic.min.js');

const Home = (props) => {
    return (
        <h1>Home Page</h1>
    )
}

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Frame}></Route>
            <Link style={{marginRight:'10px'}} to="/home">Home</Link>
            <Link style={{marginRight:'10px'}} to="/about">about</Link>
            <Link style={{marginRight:'10px'}} replace to="/123">contact</Link>
            <Link style={{marginRight:'10px'}} to="/xxxxxxx">other</Link>
            {/* <Link to={{ pathname: '/query/user', search='?id456&name=chentian' }}>query2</Link> */}
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" render={
                    ()=>(<h1>about</h1>)
                } />
                <Route path="/:itemid" render={
                    ({match})=>(<h1>{match.params.itemid}</h1>)
                } />
                <Route render={
                    ()=>(<h1>404</h1>)
                } />
            </Switch>


        </div>
    </Router>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept();
}