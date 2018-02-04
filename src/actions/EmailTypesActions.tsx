
import * as constans from '../const/EmailTypesConst';

export interface AddUser {
    type: constans.EMAIL_TYPES_ADD_USER
}

export interface DelUser {
    type: constans.EMAIL_TYPES_DEL_USER
}

export type EmailTypesAction = AddUser | DelUser;

export function addUser():AddUser {
    return {
        type: constans.EMAIL_TYPES_ADD_USER
    };
}

export function delUser():DelUser {
    return {
        type: constans.EMAIL_TYPES_DEL_USER
    };
}