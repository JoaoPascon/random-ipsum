import React, {Component} from 'react'
import Header from './components/header'
import Footer from './components/footer'
import SectionTitle from './components/sectionTitle'
import GeneratorText from './components/generatorText'
import PlayersSelector from './components/charactersSelector'
import PlayersDAO from './services/characterList'
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
            <div>
                <div>
                    <SectionTitle title="Gerador de Texto" />
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
                <div className="contribution">
                    <SectionTitle title="Adicione Seu Personagem" />
                    <div className="contribution-desc">
                        Gostou da ideia? 
                        <br/> Faça um fork do projeto no github e manda um pull-request com seu personagem!
                        <div className="git-information">
                          <span class="fab fa-github git-icon"></span>
                         <div class="git-link">
                             <span>Acesse: </span>
                             <a class="break-word" target="_blank" href="https://github.com/JoaoPascon/random-ipsum.git">
                                 https://github.com/JoaoPascon/random-ipsum
                            </a>
                         </div>
                        </div>                  
                    </div> 
                </div>
                <div className="about">
                    <SectionTitle title="Sobre" />
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