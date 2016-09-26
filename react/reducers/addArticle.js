import { PREVIEW , ADD_TEMP_ARTICLE , ADD_ARTICLE_TITLE , ADD_ARTICLE_INTRO , DEL_ARTICLE} from '../constants/actionType';

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
        case ADD_ARTICLE_TITLE:
            return {
                ...state,
                title: action.value
            }
        case ADD_ARTICLE_INTRO:
            return {
                ...state,
                intro: action.value
            }
        case DEL_ARTICLE:{
            return {
                ...state,
                title: '',
                intro: ''
            }
        }
        default:
            return state;
    }
};




export default addArticle;
