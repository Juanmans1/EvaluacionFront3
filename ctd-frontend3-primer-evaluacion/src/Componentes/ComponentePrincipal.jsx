import { Component} from "react";
import Boton from "./Boton"
import Data from '../components/data.json'
 let selecciones;
export default class ComponentePrincipal extends Component {

    constructor(){
    super()
    this.state={
        historia: null,
        opcion: {a:null, b:null},
        contador:1,
        historial:null,
        seleccionAnterior:null,
}
this.eleccion=this.eleccion.bind(this)

}
componentDidMount () {
        this.setState({
            historia:Data[0].historia,
            opcion:{ a:Data[0].opciones.a , b:Data[0].opciones.b}

        })
    }

    //Al dar click en letra  (letra = variable)
//Paso 1: incrementar el contador (variable=this.state.contador+1)
//Paso 2: concatenar con la letra en la que se hizo click (variable 2)
//Paso 3 : buscar coincidencias con id de objetos dentro de arreglo Data (Data.find(item=>item.id===(this.state.contador+1+variable2))))

eleccion(letraOpcion){
    //construir id buscado
    let idNuestro = this.state.contador+1
    idNuestro =idNuestro+letraOpcion
    //buscar diapositiva
    let diapositiva=Data.find(item=>item.id===idNuestro)
    //almacenando historial
    this.state.contador===1?selecciones=letraOpcion.toUpperCase()+" ":selecciones=selecciones+" "+letraOpcion.toUpperCase()

if(this.state.contador <= Data.length/2-0.5){

this.setState({
        historia: diapositiva.historia,
        opcion: {a:diapositiva.opciones.a, b:diapositiva.opciones.b},
        contador: this.state.contador+1,
        historial:selecciones,
        seleccionAnterior:letraOpcion.toUpperCase()
    })} else{
        alert ('llegaste al fin ')
    }}
    
    render(){
        return (
            <div className="layout">
                <h1 className="historia">{this.state.historia}</h1>
                <div>
                    <Boton funcion= {this.eleccion} valor= "a" texto= {this.state.opcion.a}/>
                    <Boton funcion= {this.eleccion} valor= "b" texto= {this.state.opcion.b}/>
                </div>
                <div className="recordatorio">

                <h3>Seleccion anterior:{this.state.seleccionAnterior}</h3>

                <h3>Historial:{this.state.historial}</h3>
                </div>
                </div>
        )
    }
}