import React, { Component } from 'react';
import StylingContext from './styling/context';
import style from './styling/style';
import Foobar from "./Foobar";

export default class App extends Component {
    render() {
        return (
            <div>
                <StylingContext.Provider value={style}>
                    <Foobar/>
                </StylingContext.Provider>
            </div>
        )
    }
}
