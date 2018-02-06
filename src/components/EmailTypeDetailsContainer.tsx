import * as React from "react";
import { EmailList } from './EmailList';
import { EmailType } from '../models/EmailType';
import { Field, reduxForm } from "redux-form";

export interface EmailTypeDetailsContainerProps {
    emailType: EmailType;
    handleFormSubmit: () => void
}

export class EmailTypeDetailsContainer extends React.Component<EmailTypeDetailsContainerProps, any> {

    constructor(props: EmailTypeDetailsContainerProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Email type: [ {this.props.emailType.name} ]</h2>
                <form onSubmit={this.props.handleFormSubmit}>
                    <div>
                        <label htmlFor="name">Email type Name</label>
                        <Field name="name" component="input" type="text" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
