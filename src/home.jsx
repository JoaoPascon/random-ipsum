import React, {Component} from 'react'
import Header from './components/header'
import Footer from './components/footer'
import GeneratorText from './components/generatorText'
import PlayersSelector from './components/playersSelector'
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
                <div>
                 <div className="section-title">
                    - Gerador de Texto -
                    </div>
                    <div className="display-flex-center"> 
                  <div className="col-xs-12 col-md-12  col-lg-6">               
                            <PlayersSelector carouselId="carouselSelectPlayer" items={this.state.options}
                                selectedCb={this.updatePlayer}/>
                  </div>
                  <div className="col-xs-12 col-md-12 col-lg-6">
                        <GeneratorText player={this.state.selectedPlayer}/>
                  </div>
                  </div>
                </div>
                <div className="about">
                    <div className="section-title">
                    - Sobre -
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