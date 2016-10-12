import { PREVIEW , ADD_TEMP_ARTICLE , ADD_ARTICLE_TITLE , ADD_ARTICLE_INTRO , CLEAR_ARTICLE,SAVE_ARTICLE,INIT_ARTICLE} from '../constants/actionType';

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
                articleId: action.value._id
            }
        case ADD_ARTICLE_TITLE:
            return {
                ...state,
                title: action.value
            }
        case ADD_ARTICLE_INTRO:
            return {
                ...state,
                describe: action.value
            }
        case CLEAR_ARTICLE:{
            return {
                ...state,
                title: '',
                describe: '',
                articleId:'',
                preview:''
            }
        }
        case SAVE_ARTICLE:{
            return state;
        }
        case INIT_ARTICLE:{
            return {
                ...state,
                title: action.value.title,
                describe: action.value.describe,
                articleId:action.value.articleId,
                preview:action.value.describe
            }
        }
        default:
            return state;
    }
};




export default addArticle;
