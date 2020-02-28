import React, {Component} from 'react'
import Header from './components/header'
import Footer from './components/footer'
import TextArea from './components/TextArea'
import CarouselItems from './components/carouselItems'
import PlayersDAO from './services/playersDAO'
import './home.css'
import {ToastsContainer, ToastsStore} from 'react-toasts'


export default class Home extends Component{

    constructor(props){
        
        super(props)
        this.state = {
            options: PlayersDAO.getAllMoreThis(['João', 'Pedro', 'Alberto', 'Henrique', 
            'Luiz', 'Roberto', 'Ronaldo', 'q', 'a', 'r', 'g']),
            selectedPlayer: {}
        }
        this.updatePlayer = this.updatePlayer.bind(this);
    }

    updatePlayer(newPlayer) {
        this.setState({selectedPlayer: newPlayer});
    }

    render() {
        return <div>     
            <Header></Header>
            <div className="display-flex-center">
                <div className="col-xs-12 col-md-12  col-lg-6">               
                        <CarouselItems carouselId="carouselSelectPlayer" items={this.state.options}
                            selectedCb={this.updatePlayer}/>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6">
                    <TextArea player={this.state.selectedPlayer}/>
                </div>
            </div>
            <ToastsContainer store={ToastsStore}/>
            <Footer></Footer>
        </div>
    }
}