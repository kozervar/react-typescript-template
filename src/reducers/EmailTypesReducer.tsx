
import { EmailTypesStoreState } from '../store/EmailTypesStore';
import { EmailTypesAction } from '../actions/EmailTypesActions';
import { EMAIL_TYPES_ADD_USER, EMAIL_TYPES_DEL_USER } from '../const/EmailTypesConst';

export function userOperation(state: EmailTypesStoreState, action: EmailTypesAction): EmailTypesStoreState {
    console.log('user op', action);
    switch (action.type) {
        case EMAIL_TYPES_ADD_USER:
            return { ...state, userCount: state.userCount + 1 };
        case EMAIL_TYPES_DEL_USER:
            return { ...state, userCount: state.userCount - 1 };
    }
    return state;
}