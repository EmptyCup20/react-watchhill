import { ARTICLE_REQUEST,ARTICLE_RECEIVE } from '../constants/actionType';

const article = (state = {
   list:[],             //页面显示的文章列表
   contentList:[],      //文章内容组成的列表
   getting:false        //有没有正在获取文章内容标志

}, action) => {

    switch(action.type) {
        case ARTICLE_REQUEST:
            return {
                ...state,
                getting:true
            };

        case ARTICLE_RECEIVE:
            return {
                ...state,
                getting:false
            };

        default:
            return state;
    }
};




export default article;