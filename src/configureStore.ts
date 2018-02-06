import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import { browserHistory } from 'react-router';
// import { routerMiddleware } from 'react-router-redux';

import rootEpic from './epics';
import rootReducer from './reducers/index';
import { EmailTypesStoreState } from './store/EmailTypesStore';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(initialState = {}) {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                epicMiddleware,
                // routerMiddleware(browserHistory)
            )
        )
    );
    return store;
}
