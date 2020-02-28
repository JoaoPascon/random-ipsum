import React, {Component} from 'react'
import './footer.css'



export default class Footer extends Component {



    render() {
        return <div className="footer">
            <span>{`© ${new Date().getFullYear()} Random-Ipsum `}</span>
        </div>
    }

}