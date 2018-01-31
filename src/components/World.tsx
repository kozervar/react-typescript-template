import * as React from "react";

export class World extends React.Component<any, any> {
  render() {
    return <div className='world'>Hello, {this.props.name}</div>;
  }
}
