//基础库
import React,{ Component,PropTypes } from 'react';


//主要组件
import Header from './index/Header';
import Footer from './index/Footer';


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

                <Header login = {login} logout={logout} />

                {this.props.children}

                <Footer />

            </div>
        )
    }
}
