import * as actions from './../actions/EmailTypesActions';
import { connect, Dispatch } from 'react-redux';
import { EmailTypesStoreState } from '../store/EmailTypesStore';
import { EmailTypesContainer } from './EmailTypesContainer';
import { EmailType } from '../models/EmailType';
import { RootState } from '../reducers/index';

export function mapStateToProps(state: RootState) {
    return {
        emailTypes: state.emailTypes.emailTypes,
    }
}


export function mapDispatchToProps(dispatch: Dispatch<actions.EmailTypesActions>) {
    return {
        onRefresh: () => dispatch(actions.fetchEmailTypes()),
        onItemClick: (emailType:EmailType) => dispatch(actions.showEmailTypeDetails(emailType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(<any>EmailTypesContainer);