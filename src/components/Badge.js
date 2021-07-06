import React from 'react';

class Badge extends React.Component{
    state = {
        cantidad: 0
    }

    agregar = () => {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
    quitar = () =>{
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }
    limpiar = () =>{
        this.setState({
            cantidad: 0
        })
    }

    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <hr/>
                <div>Cantidad : {this.state.cantidad}</div>
                <button onClick={this.agregar.bind(this)}>+</button>
                <button onClick={this.limpiar.bind(this)}>Limpiar</button>
                <button onClick={this.quitar.bind(this)}>-</button>
                <p>{this.props.price}</p>
            </div>
        );
    }
}

export default Badge;