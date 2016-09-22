import { PREVIEW , ADD_TEMP_ARTICLE } from '../constants/actionType';

const addArticle = (state = {
   preview:''
}, action) => {

    switch(action.type) {
        case PREVIEW :
            return {
                ...state,
                preview: action.value
            };
        case ADD_TEMP_ARTICLE:
            return {
                ...state,
                tempId: action.value._id
            }
        default:
            return state;
    }
};




export default addArticle;
