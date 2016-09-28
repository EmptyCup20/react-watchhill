//基础库
import { connect } from 'react-redux';

//action


//视图组件
import Article from '../views/index/Article';


//绑定article store到Article组件
function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}


export default connect(mapStateToProps)(Article);