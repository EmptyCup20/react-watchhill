//基础库
import React,{ Component,PropTypes } from 'react';
import '../../../../public/css/footer.less';

export default class Footer extends Component{
    render(){
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 1.1.0
                </div>
                <br></br>
            </footer>
        );
    };
}
