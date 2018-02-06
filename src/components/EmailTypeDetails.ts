import * as actions from './../actions/EmailTypesActions';
import { EmailTypeDetailsContainer, EmailTypeDetailsContainerProps } from "./EmailTypeDetailsContainer";
import { connect } from "react-redux";
import { RootState } from "../reducers/index";
import { Dispatch } from 'redux';
import { EmailType } from '../models/EmailType';
import { reduxForm, ConfigProps } from 'redux-form';

export function mapStateToProps(state: RootState) {
    let props: any = {
        emailType: new EmailType()
    };
    if (state.emailTypes.selectedEmailType) {
        props.emailType = state.emailTypes.selectedEmailType;
        props.initialValues = {
            name: state.emailTypes.selectedEmailType.name
        };
    }
    return props
}


export function mapDispatchToProps(dispatch: Dispatch<actions.EmailTypesActions>) {
    return {
        handleFormSubmit: () => console.warn('Handle form submit not supported!')
    }
}

const EmailTypeDetailsContainerForm = reduxForm(<ConfigProps>{
    form: 'emailTypeDetailsContainer',
    enableReinitialize: true
})(<any>EmailTypeDetailsContainer);

export default connect(mapStateToProps, mapDispatchToProps)(<any>EmailTypeDetailsContainerForm);