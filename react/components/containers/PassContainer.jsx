//基础库
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//action
import * as ProfileActions from '../../actions/profile';

//视图组件
import Pass from '../views/index/profile/Pass';

//绑定state
function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

//绑定action
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ProfileActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Pass);