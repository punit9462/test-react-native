import * as ActionConstants from "../constants/constants.js";


export function add(data) {
    
    return { type: ActionConstants.MAIN_SCREEN_BUTTON_CLICKED, data:data };
}