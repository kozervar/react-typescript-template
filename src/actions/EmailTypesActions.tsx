import * as constans from '../const/EmailTypesConst';
import { Action } from 'redux';
import { EmailType } from '../models/EmailType';

export interface FetchEmailTypes extends Action {
    type: constans.FETCH_EMAIL_TYPES
}

export interface FetchEmailTypesSuccess extends Action {
    type: constans.FETCH_EMAIL_TYPES_SUCCESS,
    payload: EmailType[];
}

export interface FetchEmailTypesFailed extends Action {
    type: constans.FETCH_EMAIL_TYPES_FAILED,
    error: string;
}

export interface ShowEmailTypeDetails extends Action {
    type: constans.SHOW_EMAIL_DETAILS
    payload: EmailType
}

export type EmailTypesActions = FetchEmailTypes | FetchEmailTypesSuccess | FetchEmailTypesFailed | ShowEmailTypeDetails;

export function fetchEmailTypes(): FetchEmailTypes {
    return {
        type: constans.FETCH_EMAIL_TYPES
    };
}

export function fetchEmailTypesSuccess(emailTypes:EmailType[]): FetchEmailTypesSuccess {
    return {
        type: constans.FETCH_EMAIL_TYPES_SUCCESS,
        payload: [...emailTypes]
    };
}

export function fetchEmailTypesFailed(error:string): FetchEmailTypesFailed {
    return {
        type: constans.FETCH_EMAIL_TYPES_FAILED,
        error: error
    };
}

export function showEmailTypeDetails(emailType:EmailType): ShowEmailTypeDetails {
    return {
        type: constans.SHOW_EMAIL_DETAILS,
        payload: emailType
    };
}