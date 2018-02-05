import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {emailTypeReducer} from './EmailTypesReducer'

const rootReducer = combineReducers({
    emailTypes: emailTypeReducer,
    // routing: routerReducer,
    form: formReducer,
    def: (state = {}) => state,
});

export default rootReducer;