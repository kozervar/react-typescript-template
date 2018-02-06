import * as React from "react";
import { EmailList } from './EmailList';
import { EmailType } from '../models/EmailType';
import EmailTypeDetails from "./EmailTypeDetails";

export interface EmailTypesContainerProps {
    emailTypes: EmailType[];
    onRefresh: () => void,
    onItemClick: (emailType:EmailType) => void;
}

export class EmailTypesContainer extends React.Component<EmailTypesContainerProps, any> {

    constructor(props:EmailTypesContainerProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Email types (#{this.props.emailTypes.length})</h1>
                <hr />
                <div>
                    <button onClick={this.props.onRefresh}>REFRESH</button>
                </div>
                <hr />
                <EmailList emailTypes={this.props.emailTypes} {...this.props} />
                <hr />
                <EmailTypeDetails />
            </div>
        );
    }
}

