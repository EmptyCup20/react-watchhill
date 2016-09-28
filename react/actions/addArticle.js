import { PREVIEW , ADD_TEMP_ARTICLE , ADD_ARTICLE_TITLE ,ADD_ARTICLE_INTRO,DEL_ARTICLE,SAVE_ARTICLE} from '../constants/actionType';
import ajax from '../ajax';
export function preview(value){
    return {
        type : PREVIEW,
        value : value
    }
}

export function addTempArticle(article){
    if(article.articleId){
        var delbool = window.confirm('是否确定删除清空');
        if(delbool){
            // return ajax().delArticle(article)
            //     .then(data => {
            //         return dispatch(clearAndDel_receive());
            //     })
            return clearAndDel_receive();
        }else{
            return{
                type : 'NO_DELETE'
            }
        }
    }else{
        if(article.title){
            return dispatch => {
                return ajax().addTempArticle(article)
                    .then(data => {
                        return dispatch(addTempArticle_receive(data));
                    })
            }
        }else{
            alert('标题不可为空');
            return {
                type: 'NO_TITLE'
            }
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

function clearAndDel_receive(){
    return {
        type : DEL_ARTICLE
    }
}

export function save_article(article){
    if(article.title){
        return dispatch => {
            return ajax().save_article(article)
                .then(data => {
                    return dispatch(saveArticle_receive(data));
                })
        }
    }else{
        alert('标题不可为空');
        return {
            type : 'NO_TITLE'
        }
    }
}

function saveArticle_receive(data){
    return {
        type : SAVE_ARTICLE,
        value : data
    }
}
