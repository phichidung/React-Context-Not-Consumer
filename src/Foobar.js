import React, { Component } from 'react';
import StylingContext from './styling/context';

export class MyComponent extends Component {

    static contextType = StylingContext;

    render() {

        return (
            <p style={this.context.MyComponent}>
                Some text
            </p>
        )
    }
}

export default class Foobar extends Component {

    render() {

        return (
            <MyComponent/>
        );
    }
}
