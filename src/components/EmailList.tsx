import * as React from "react";
import { EmailType } from '../models/EmailType';
import { EmailListItem } from './EmailListItem';

export interface EmailListProps {
    emailTypes: EmailType[];
}

export class EmailList extends React.Component<EmailListProps, any> {

    emailListItems:any[] = [];

    constructor(props:EmailListProps) {
        super(props);
        this.emailListItems = props.emailTypes.map(et => <EmailListItem emailType={et}/>);
    }

    render() {
        return (
            <ul>
                {this.emailListItems}
            </ul>
        );
    }
}
