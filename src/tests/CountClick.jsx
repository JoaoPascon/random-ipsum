import React, {Component} from 'react'


export default class CountClick extends React.Component {

    constructor() {
        super();
        this.state = {
            clicks: 0
        }
        this.addClick = this.addClick.bind(this);
    }

    addClick() {
        this.setState({clicks: this.state.clicks + 1})
    }

    render() {
        return <div>
            <p>{this.state.clicks}</p>
            <button type="button" onClick={this.addClick}>Add Click!</button>
            </div>
    }

} 