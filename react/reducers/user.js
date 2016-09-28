import { USER_REQUEST,USER_RECEIVE } from '../constants/actionType';


function addArticleList(state,data) {
    let lists = state.articleList;
    lists.push(data);
    return lists;
}


const user = (state = {
    articleList:[],             //个人文章列表
    getting:false               //有没有正在获取文章内容列表
}, action) => {

    switch(action.type) {
        case USER_REQUEST:
            return {
                ...state,
                getting:true
            };

        case USER_RECEIVE:
            return {
                ...state,
                getting:false,
                articleList:addArticleList(state,action.data)
            };

        default:
            return state;
    }
};

export default user;