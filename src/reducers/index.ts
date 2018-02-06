import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';

import {emailTypeReducer} from './EmailTypesReducer'
import { EmailTypesStoreState } from '../store/EmailTypesStore';

export interface RootState {
    emailTypes: EmailTypesStoreState,
    form: FormStateMap,
}

const rootReducer = combineReducers<RootState>({
    emailTypes: emailTypeReducer,
    // routing: routerReducer,
    form: formReducer
});

export default rootReducer;