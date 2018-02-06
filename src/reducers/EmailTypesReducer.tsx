import { EmailTypesStoreState } from '../store/EmailTypesStore';
import { EmailTypesActions } from '../actions/EmailTypesActions';
import { FETCH_EMAIL_TYPES, FETCH_EMAIL_TYPES_FAILED, FETCH_EMAIL_TYPES_SUCCESS, SHOW_EMAIL_DETAILS } from '../const/EmailTypesConst';

export function emailTypeReducer(state: EmailTypesStoreState = { emailTypes: [] }, action: EmailTypesActions): EmailTypesStoreState {
    switch (action.type) {
        case FETCH_EMAIL_TYPES:
            return { emailTypes: state.emailTypes };
        case FETCH_EMAIL_TYPES_SUCCESS:
            return { emailTypes: action.payload };
        case FETCH_EMAIL_TYPES_FAILED:
            return { ...state, error: true, errorReason: action.error }
        case SHOW_EMAIL_DETAILS:
            return { ...state, selectedEmailType: action.payload }
        default:
            return state;
    }
}