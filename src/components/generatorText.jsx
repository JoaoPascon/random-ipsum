import React from 'react'
import './generatorText.css'
import GenerateText from '../services/generateText'
import {ToastsContainer, ToastsStore} from 'react-toasts';
import Select from 'react-select';
import RandomPathImg from '../assets/images/random_image.jpg'


class GeneratorText extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            text: '',
            quantityParagraphs: 0,
            author: {name: 'Não selecionado', sourceImagePath: RandomPathImg, btnLabel: 'Gerar Texto'},
            optionSelected: '',
            quantityOptions: []
        }
        this.copyText = this.copyText.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.generateText = this.generateText.bind(this);
    }

    componentDidMount() {
        this.setState({quantityOptions: [{value: 1, label: 'Um'}, {value: 2, label: 'Dois'}, {value: 3, label: 'Três'}, 
        {value: 4, label: 'Quatro'}, {value: 5, label: 'Cinco'}, {value: 6, label: 'Seis'}, {value: 7, label: 'Sete'},
        {value: 8, label: 'Oito'}, {value: 9, label: 'Nove'}]});
        this.setState()
    }

    componentDidUpdate(prevProps) {
        if(this.props.player !== prevProps.player){
            this.setState(prevState => (
                { author: {name: this.props.player.name || 'Não selecionado',
                          sourceImagePath: this.props.player.sourceImagePath || RandomPathImg,
                          btnLabel: this.props.player.btnLabel || 'Gerar Texto'}
                }))
        }        
    }

    copyText(event) {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges()
        ToastsStore.success('Texto copiado com sucesso');
    }

    updateOption(option) {
        this.setState({optionSelected: option});
    }

    generateText(){
        if(!this.state.optionSelected || !this.props.player.id){
            !this.props.player.id ? ToastsStore.error('Selecione um personagem para poder gerar o texto!') : void(0)
            !this.state.optionSelected ? ToastsStore.error('Selecione o Nº de paragrafos para serem gerados') : void(0)
            return;
        }
        this.setState({text: GenerateText.getText(this.state.optionSelected.value, this.props.player.words)});
    }

    render() {
        return <div className="panel-generator">
                    <div className="header-text-area">
                        <div className="author">
                        <div className="author-img">
                            <img src={this.state.author.sourceImagePath} />
                        </div>
                        <div className="author-title">
                            <span>{this.state.author.name}</span>
                        </div>
                    </div>
                        <div className="input-number">
                            <div className="label">
                                <span>N° de Paragrafos: </span>
                            </div>
                            <Select onChange={this.updateOption}
                                    options={this.state.quantityOptions} 
                                    value={this.state.optionSelected}/>
                        </div>
                    </div> 
                    <div className="btn-actions">
                        <button className="btn btn-outline-success btn-generate-text" onClick={() => this.generateText()}>
                                <span>{this.state.author.btnLabel}</span>
                        </button>
                        <button className="btn btn-outline-info btn-copy-text" onClick={(e) => this.copyText(e)}>
                        <span className="far fa-copy mr-10"></span>
                        <span> Copiar Texto</span>
                    </button>
                    </div>
                    <textarea className="text-area-style" rows="10" cols="50" value={this.state.text}></textarea>
                    <ToastsContainer store={ToastsStore}/>
                </div>
            
    }
}

export default GeneratorText