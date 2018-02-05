import { Observable } from 'rxjs'
import { ActionsObservable } from 'redux-observable'
import * as constants from '../const/EmailTypesConst';
import {
    EmailTypesActions,
    FetchEmailTypes,
    FetchEmailTypesFailed,
    FetchEmailTypesSuccess,
    fetchEmailTypesSuccess
} from '../actions/EmailTypesActions';
import { EmailType } from '../models/EmailType';

export function fetchEmailType(action$ :ActionsObservable<FetchEmailTypes>) : Observable<EmailTypesActions> {
    return action$.ofType(constants.FETCH_EMAIL_TYPES_STR)
        .delay(1000)
        .mergeMap(() => {
            let emailTypes: EmailType[] = [];
            emailTypes.push(<EmailType>{ name: 'Default'});
            emailTypes.push(<EmailType>{ name: 'Custom'});
            emailTypes.push(<EmailType>{ name: 'Stict'});
            const resultAction = fetchEmailTypesSuccess(emailTypes);
            return Observable.of(resultAction);
        });
}