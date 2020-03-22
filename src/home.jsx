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
            options: PlayersDAO.getAll(),
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
            <div className="">
                <div className="display-flex-center">
                    <div className="col-xs-12 col-md-12  col-lg-6">               
                            <CarouselItems carouselId="carouselSelectPlayer" items={this.state.options}
                                selectedCb={this.updatePlayer}/>
                  </div>
                    <div className="col-xs-12 col-md-12 col-lg-6">
                        <TextArea player={this.state.selectedPlayer}/>
                    </div>
                </div>
                <div className="about">
                    <div className="about-title">
                    - Sobre o Random -
                    </div>
                    <div className="about-desc">
                    Random Ipsum é um gerador de texto aletórios que gera seu conteúdo a partir de memes da internet,
                    famosos com grandes bordões ou personagens ficticios do universo pop e nerd. 
                    Os textos aqui gerados são para unica e exclusivamente diversão dos desenvolvedores 
                    que buscam material de teste para os seus projetos.    
                    </div> 
                </div>
            </div>
            <ToastsContainer store={ToastsStore}/>
            <Footer></Footer>
        </div>
    }
}