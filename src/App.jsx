import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name It!',
        };
    }
    render() {
        return (
            <div className="App">
                <Header headTitle={this.state.headerText} />
                <SearchBox />
            </div>
        );
    }
}

export default App;
