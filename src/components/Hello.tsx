import * as React from "react";

export class Hello extends React.Component<any, any> {
  render() {
    return <div className='hello'>Hello, {this.props.name}</div>;
  }
}
