import { combineEpics } from 'redux-observable';

import * as emailTypes from './EmailTypes';

const rootEpic = combineEpics(
    emailTypes.fetchEmailType,
);

export default rootEpic