import React from 'react';
import {Link} from 'react-router';


export default class App extends React.Component {

    render() {
        return (
            <div className="row">


                <h1>Header</h1>

                <ul className="nav nav-tabs" role="nav">
                    <li role="presentation"><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
                    <li role="presentation"><Link to="/index">Index</Link></li>
                    <li role="presentation"><Link to="/about">About</Link></li>
                </ul>


                <h1>Body</h1>

                {this.props.children}



                <h1>Footer</h1>

            </div>
        )
    }
}
