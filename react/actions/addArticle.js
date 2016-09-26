import { PREVIEW , ADD_TEMP_ARTICLE } from '../constants/actionType';
import ajax from '../ajax';
export function preview(value){
    return {
        type : PREVIEW,
        value : value
    }
}

export function addTempArticle(article){
    if(article.tempId){
        var delbool = window.confirm('是否确定删除清空');
        if(delbool){
            return {
                type : DEL_ARTICLE
            }
        }else{
            return{
                type : 'NO_DELETE'
            }
        }
    }else{
        return dispatch => {
            return ajax().addTempArticle(article)
                .then(data => {
                    return dispatch(addTempArticle_receive(data));
                })
        }
    }

}

function addTempArticle_receive(data){
    return {
        type : ADD_TEMP_ARTICLE,
        value : data.data
    }
}

export function addTitle(value){
    return {
        type : ADD_ARTICLE_TITLE,
        value : value
    }
}

export function addIntro(value){
    return {
        type : ADD_ARTICLE_INTRO,
        value : value
    }
}
