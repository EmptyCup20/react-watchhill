import { ARTICLE_REQUEST,ARTICLE_RECEIVE,ARTICLE_HOME_RECEIVE } from '../constants/actionType';


/**
 * 存入文章
 * @param state
 * @param data
 */
const addContentList = (state,data) => {
    let lists = state.contentList;
    lists.push(data);
    return lists;

    //return [...state.contentList,...data]???
};



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
                getting:false,
                contentList:addContentList(state,action.data)
            };

        case ARTICLE_HOME_RECEIVE:
            return {
                ...state,
                getting:false,
                list:action.data
            };

        default:
            return state;
    }
};








export default article;