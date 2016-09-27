//基础库
import { connect } from 'react-redux';

//action


//视图组件
import User from '../views/index/User';


//绑定user store到user组件
function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(User);