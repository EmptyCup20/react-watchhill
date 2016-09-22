import { PREVIEW } from '../constants/actionType';

export function preview(value){
    return {
        type : PREVIEW,
        value : value
    }
}
