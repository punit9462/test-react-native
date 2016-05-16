
import screenData from '../reducers/addReducer.js';

const rootReducer = storage.reducer(combineReducers({
    screenData
}));

let rootStore = createStore(
    rootReducer
);