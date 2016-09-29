
import { ARTICLE_REQUEST,ARTICLE_RECEIVE,ARTICLE_HOME_RECEIVE } from '../constants/actionType';
import ajax from '../ajax';



/**
 * 获取文章内容
 * @param id -> 需要获取的文章id
 * @returns {Function}
 */
export function article_getContent(id) {
    return (dispatch,getState) => {
        if(article_authen(getState())) {
            return dispatch(article_ajax(id));          //发起一个http请求
        } else {
            return Promise.resolve();                   //告诉thunk无需等待,从而跳过dispatch,进入reducers?
        }
    };
}


/**
 * 获取主页文章列表
 * @returns {Function}
 */
export function article_getHomeList() {
    return (dispatch,getState) => {
        if(article_authen(getState())) {
            return dispatch(article_getHomeList_ajax());          //发起一个http请求
        } else {
            return Promise.resolve();                   //告诉thunk无需等待,从而跳过dispatch,进入reducers?
        }
    };
}



/**
 * 判断是否正在获取文章
 * @param state
 */

function article_authen(state) {
    return !state.articles.getting;
}


/**
 * 发起获取文章内容的ajax
 * @param id
 */
function article_ajax(id) {
    return dispatch => {
        dispatch(article_request());                          //挂起登录请求,防止重复请求
        return ajax().article(id)
            .then(data => dispatch(article_reveive(id,data)));   //接受到数据后重新更新state
    };
}

/**
 * 获取主页文章列表的ajax
 * @returns {Function}
 */
function article_getHomeList_ajax() {
    return dispatch => {
        dispatch(article_request());                          //挂起登录请求,防止重复请求
        return ajax().homeArticle()
            .then(data => dispatch(article_home_reveive(data.data)));   //接受到数据后重新更新state
    };
}





/**
 * 挂起获取文章内容和列表的请求
 * @returns {{type: string}}
 */
function article_request() {
    return {
        type: ARTICLE_REQUEST
    }
}


/**
 * 获取文章内容
 * @param id
 * @param data
 * @returns {{type: string}}
 */
function article_reveive(id,data) {

    data.userId = data._id;         //用户Id
    data._id = id.articleId;        //文章Id

    return {
        type: ARTICLE_RECEIVE,
        data: data
    }
}


/**
 * 获取主页列表内容
 * @param data
 * @returns {{type: string, data: *}}
 */

function article_home_reveive(data) {
    return {
        type: ARTICLE_HOME_RECEIVE,
        data: data
    }
}