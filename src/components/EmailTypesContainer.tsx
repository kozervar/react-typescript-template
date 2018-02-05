import * as React from "react";
import { EmailList } from './EmailList';
import { EmailType } from '../models/EmailType';

export interface EmailTypesContainerProps {
    emailTypes: EmailType[];
    onRefresh: () => void
}

export class EmailTypesContainer extends React.Component<EmailTypesContainerProps, any> {

    constructor(props:EmailTypesContainerProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Email types (#{this.props.emailTypes})</h1>
                <hr />
                <div>
                    <button onClick={this.props.onRefresh}>REFRESH</button>
                </div>
                <hr />
                <EmailList emailTypes={this.props.emailTypes}/>
            </div>
        );
    }
}

