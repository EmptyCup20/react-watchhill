import { PREVIEW } from '../constants/actionType';
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
                return dispatch(data);
            })
    }
}

function addTempArticle_receive(data){
    return {
        type : ADD_TEMP_ARTICLE,
        value : data.data
    }
}
