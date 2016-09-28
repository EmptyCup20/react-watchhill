//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//action


//视图组件
import Profile from '../views/index/Profile';

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Profile);
