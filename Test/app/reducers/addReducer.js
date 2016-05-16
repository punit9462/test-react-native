import { MAIN_SCREEN_BUTTON_CLICKED } from '../actions/constants/constants.js'

const initialState = {
    data : 1
};

export default function screenData(state = initialState, action) {
    switch (action.type) {
        case MAIN_SCREEN_BUTTON_CLICKED:
            return Object.assign({}, state, { data: action.data });
        default:
            return state
    }
}