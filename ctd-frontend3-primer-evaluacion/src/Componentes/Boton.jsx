import { Component } from "react";
export default class Boton extends Component {

render(){
    return(
        <>
        <span className="opcion"> <button className="botones"onClick = {()=> this.props.funcion(this.props.valor)}>{this.props.valor.toUpperCase()}</button> <h2 className="opciones">{this.props.texto}</h2></span>
        </>

    )
}

}