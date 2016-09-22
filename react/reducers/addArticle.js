import { PREVIEW } from '../constants/actionType';

const addArticle = (state = {
   preview:''
}, action) => {

    switch(action.type) {
        case PREVIEW :
            return {
                ...state,
                preview: action.value
            };
        default:
            return state;
    }
};




export default addArticle;
