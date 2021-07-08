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
        const hasItems = this.state.cantidad > 0

        const styles = {

            border: '1px solid black',
            'margin-bottom': '1em',
            'border-radius': '0.5em',
            background: hasItems ? 'linear-gradient(45deg, black, #4a02f7)' : '#FFFFFF',
            color: hasItems ? '#FFFFFF' : '#000',
            transition: 'all 400ms ease-out'
        }

        return(
            <div style={styles}>
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