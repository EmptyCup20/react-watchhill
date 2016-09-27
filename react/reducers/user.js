import { USER_REQUEST,USER_RECEIVE } from '../constants/actionType';



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
                getting:false
            };

        default:
            return state;
    }
};

export default user;