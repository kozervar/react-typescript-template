import * as actions from './../actions/EmailTypesActions';
import { connect, Dispatch } from 'react-redux';
import { EmailTypesStoreState } from '../store/EmailTypesStore';
import { EmailTypesContainer } from './EmailTypesContainer';

export function mapStateToProps({ userCount }: EmailTypesStoreState) {
    return {
        userCount: userCount
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EmailTypesAction>) {
    return {
        onAdd: () => dispatch(actions.addUser()),
        onDel: () => dispatch(actions.delUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(<any>EmailTypesContainer);