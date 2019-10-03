import React, { Component } from 'react';
import StylingContext from './styling/context';

export class MyComponentChildren extends Component {

    static contextType = StylingContext;

    render() {
        return (
            <p style={this.context.MyComponentChildren}>
                Some text
            </p>
        );
    }
}

export class MyComponent extends Component {

    static contextType = StylingContext;

    render() {

        return (
            <p style={this.context.MyComponent}>
                Some text
                <MyComponentChildren/>
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
