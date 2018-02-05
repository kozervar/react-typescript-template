import * as actions from './../actions/EmailTypesActions';
import { connect, Dispatch } from 'react-redux';
import { EmailTypesStoreState } from '../store/EmailTypesStore';
import { EmailTypesContainer } from './EmailTypesContainer';
import { EmailType } from '../models/EmailType';

export function mapStateToProps(state: EmailTypesStoreState) {
    console.log('mapStateToProps', state);
    let c:any[] = [];
    return {
        emailTypes: c
    }
}


export function mapDispatchToProps(dispatch: Dispatch<actions.EmailTypesActions>) {
    return {
        onRefresh: () => dispatch(actions.fetchEmailTypes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(<any>EmailTypesContainer);