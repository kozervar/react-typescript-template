import * as React from "react";
import { EmailList } from './EmailList';

export interface EmailTypesContainerProps {
    userCount: number;
    onAdd?: () => any;
    onDel?: () => any;
}

export class EmailTypesContainer extends React.Component<EmailTypesContainerProps, any> {

    constructor(props:EmailTypesContainerProps) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Email types (#{this.props.userCount})</h1>
                <hr />
                <div>
                    <button onClick={this.props.onDel}>-</button>
                    <button onClick={this.props.onAdd}>+</button>
                </div>
                <hr />
                <EmailList />
            </div>
        );
    }
}

