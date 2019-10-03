import React, { Component } from 'react';
import StylingContext from './styling/context';

export default class MyComponent extends Component {

    static contextType = StylingContext;

    render() {
        return (
            <p style={this.context.MyComponent}>
                Some text
            </p>
        )
    }
}
