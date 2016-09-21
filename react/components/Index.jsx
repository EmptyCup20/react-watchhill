//基础库
import { Link } from 'react-router';
import React,{ Component,PropTypes } from 'react';

//基础组件(demo)
import Button from './elements/Button';

//主要组件
import Header from './Header';
import Footer from './Footer';

//导航
import history from '../history';

export default class Index extends Component{

    static propTypes = {
        login: PropTypes.object.isRequired
    };


    logout(e) {
        e.preventDefault();
        //alert('111');
        this.props.logout();    //注销
    }


    // componentWillUpdate(nextProps,nextState) {
    //    if(!nextProps.login.logined) {
    //        history.replace({
    //            pathname:'/'
    //        });
    //    }
    // }


    render() {

        const { login ,logout} = this.props;
        //const _this = this;
        //console.log(login);

        return (
            <div>

                <Header login = {login} logout={logout}></Header>

                {this.props.children}

                <Footer></Footer>

            </div>
        )
    }
}
