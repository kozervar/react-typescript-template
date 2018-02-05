import * as React from "react";
import { EmailType } from '../models/EmailType';

export interface EmailListItemProps {
    emailType: EmailType;
}

export class EmailListItem extends React.Component<EmailListItemProps, any> {
    render() {
        return (
            <ul>
                <li>{this.props.emailType.name}</li>
            </ul>
        );
    }
}
