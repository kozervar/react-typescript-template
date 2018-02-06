import * as React from "react";
import { EmailType } from '../models/EmailType';
import { EmailListProps } from "./EmailList";

export interface EmailListItemProps extends EmailListProps {
    emailType: EmailType;
}

export class EmailListItem extends React.Component<EmailListItemProps, any> {

    private _onListItemClick:any;

    constructor(props:EmailListItemProps) {
        super(props);
        this._onListItemClick = this.onListItemClick.bind(this);
    }

    onListItemClick(e:any) {
        this.props.onItemClick(this.props.emailType);
    }

    render() {
        return (
            <li onClick={this._onListItemClick}>{this.props.emailType.name}</li>
        );
    }
}
