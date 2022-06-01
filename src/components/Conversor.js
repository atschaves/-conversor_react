import React, { Component } from 'react';

import './Conversor.css'


export default class Conversor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",   //valor recebido do input
            moedaB_Valor: 0,    //valor que receberá o valor convertido
        }

        this.converter = this.converter.bind(this);
    }
    
    converter() {
            
        let de_paraj = `${this.props.moedaA}${this.props.moedaB}`;
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
        let url = `https://economia.awesomeapi.com.br/last/${de_para}`

        fetch(url)
        .then(res=>{

            return res.json()

        })
        .then(json=>{

            let cotacao = json[de_paraj].bid; //val é o valor da variável e de_para o primeiro conjunto de valores
            let moedaB_Valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
            this.setState({moedaB_Valor})

        })

    }

  render() {
    return (
      <div className="conversor">
         <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
         <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
         <input type="button" value="Converter" onClick={this.converter}></input>
         <h2>{this.state.moedaB_Valor}</h2>
      </div>
    );
  }
}
