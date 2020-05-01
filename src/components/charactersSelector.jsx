import React from 'react'
import './charactersSelector.css'


export default class PlayersSelector extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemSelected: {},
      items: this.props.items,
      player: this.props.player
    }
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(item) {
    this.setState({itemSelected: item})
    this.props.selectedCb(item);
  }
    
  render() {
        return <div className="panel-selection">
          <div className="title-options">
            <span> Seleção de Personagens </span>
          </div>
          <div className="options">
            {this.props.items.map(item => {
             return <div key={item.id} 
                      className={'option-selection ' + (item.id === this.state.itemSelected.id ? 'selected': '')} 
                      defaultValue={item.name}
                      onClick={() => this.selectOption(item)}>
                      <img src={item.sourceImagePath} title={item.name}/>
                      <div className="alias">
                        <p>{item.alias}</p>                      
                      </div>
                    </div>
            })}
            </div>
    </div>
    }


}