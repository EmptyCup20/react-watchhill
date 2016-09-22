import { PREVIEW , ADD_TEMP_ARTICLE } from '../constants/actionType';
import ajax from '../ajax';
export function preview(value){
    return {
        type : PREVIEW,
        value : value
    }
}

export function addTempArticle(){
    return dispatch => {
        return ajax().addTempArticle()
            .then(data => {
                return dispatch(addTempArticle_receive(data));
            })
    }
}

function addTempArticle_receive(data){
    return {
        type : ADD_TEMP_ARTICLE,
        value : data.data
    }
}
