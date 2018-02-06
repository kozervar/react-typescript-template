import * as React from "react";
import { EmailType } from '../models/EmailType';
import { EmailListItem } from './EmailListItem';
import { EmailTypesContainerProps } from "./EmailTypesContainer";

export interface EmailListProps extends EmailTypesContainerProps {
    emailTypes: EmailType[];
}

export class EmailList extends React.Component<EmailListProps, any> {

    emailListItems:any[] = [];

    constructor(props:EmailListProps) {
        super(props);
    }

    render() {
        this.emailListItems = this.props.emailTypes.map((et, i) => <EmailListItem emailType={et} key={i} {...this.props} />);
        return (
            <ul>
                {this.emailListItems}
            </ul>
        );
    }
}
