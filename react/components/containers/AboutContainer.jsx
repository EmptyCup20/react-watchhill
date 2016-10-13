//基础库
import { connect } from 'react-redux';

//action


//视图组件
import About from '../views/index/About.jsx';

//绑定about store到About组件
function mapStateToProps(state) {
    return {
        about: state.about
    }
}


export default connect(mapStateToProps)(About);
