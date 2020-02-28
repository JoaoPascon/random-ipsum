import React from 'react'

export default class HelloWord extends React.Component {

    render() {
        return <p>Olá Galera {this.props.name}</p>
    }

}