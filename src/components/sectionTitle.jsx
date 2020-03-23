import React, {Component} from 'react'
import './sectionTitle.css'


export default class sectionTitle extends Component {

    render() {
        return <div className="section-title">
                --{this.props.title}--
            </div>
    }

}




