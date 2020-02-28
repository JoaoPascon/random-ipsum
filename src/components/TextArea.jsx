import React from 'react'
import './textArea.css'
import GeneratorText from '../services/generateText'
import {ToastsContainer, ToastsStore} from 'react-toasts';
import Select from 'react-select'


class TextArea extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            text: '',
            quantityParagraphs: 0,
            author: 'Não Selecionado',
            optionSelected: null,
            quantityOptions: [{value: 1, label: 'Um'}, {value: 2, label: 'Dois'}, {value: 3, label: 'Três'}, 
                {value: 4, label: 'Quatro'}, {value: 5, label: 'Cinco'}, {value: 6, label: 'Seis'}, {value: 7, label: 'Sete'},
                {value: 8, label: 'Oito'}, {value: 9, label: 'Nove'}]
        }
        this.formatName = this.formatName.bind(this);
        this.copyText = this.copyText.bind(this);
        this.updateOption = this.updateOption.bind(this);
        this.generateText = this.generateText.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props.player !== prevProps.player){
            this.setState({author: this.formatName()})
        }        
    }

    copyText(event) {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges()
        ToastsStore.success('Texto copiado com sucesso');
    }

    formatName() {
        
        return this.props.player.name
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
        this.setState({text: GeneratorText.getText(this.state.optionSelected.value, this.props.player.words)});
    }

    render() {
        return <div className="panel-generator">
                    <div className="header-text-area">
                        <div className="author">
                        <div className="author-img">
                            <img src={this.props.player.sourceImagePath} />
                        </div>
                        <div className="author-title">
                            <span>{this.state.author}</span>
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
                                <span>{this.props.player.btnLabel || 'Gerar'}</span>
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

export default TextArea