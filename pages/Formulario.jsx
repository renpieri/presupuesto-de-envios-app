import React from 'react'
import { useState } from 'react'
import { calcularPorcentaje, calcularSeguro } from '../helper/helper'

const Formulario = ({setPresupuesto, setCargando}) => {

        const [ datos, setDatos ] = useState({
            producto:'',
            calle:'',
            ciudad:'',
            altura:0,
            envio:'',
            peso:'',
        })
        const [mostrarCampos, setMostrarCampos] = useState(false); 
        const [seguro, setSeguro] = useState(''); 
        const {producto, calle, ciudad, altura, envio, peso} = datos


        function handleInput(e) {
            setDatos({
                ...datos,
                [ e.target.name ]: e.target.value
            })
            if (e.target.name === "envio") {
                setMostrarCampos(e.target.value === "domicilio");
            }
        }
        function handleSeguro(e) {
            setSeguro(e.target.value)
        }
        
        function onFocus(e) {
            if (e.target.value === '0') {
              e.target.value = '';
            }
          }

        function onSubmit(e){
            e.preventDefault()

            if(producto === '' || envio === '' || peso === ''){
                console.log('error')
                return
            }

            if(envio === 'domicilio' && (calle === '' || altura === '' || ciudad === '')){
                console.log('error')
                return
            }

            //domicilio 15% aumento
            let cuenta = 1800

            if(envio === 'domicilio'){
                cuenta += (cuenta * 15) / 100
            }

            cuenta = calcularPorcentaje(peso) * cuenta
            
            cuenta = parseFloat(calcularSeguro(seguro) * cuenta).toFixed(2)

            
            setCargando(true)

            setTimeout(() => {
                setPresupuesto({
                    cotizacion: cuenta,
                    seguro: seguro,
                    datos
                })

                setCargando(false)
            }, 1000);
        }

  return (
    <div className="form-box">
    <form className="mb-4" onSubmit={onSubmit}>

        <div className="">
            <input type="text" id="producto" name='producto' value={producto} onChange={handleInput} className="form-input" placeholder="Producto"/>
        </div>

        <div className="mb-4">
            <label htmlFor="envio">Envío a:</label>
            <select name="envio" onChange={handleInput} value={envio} id="envio">
                <option value="">Seleccione un envío</option>
                <option value="sucursal">Envío a sucursal</option>
                <option value="domicilio">Envío a domicilio</option>
            </select>
        </div>

        <div className={mostrarCampos ? "" : "hidden"}>
            <div className="">
                <input type="text" id="calle" name='calle' value={calle} onChange={handleInput} className="form-input" placeholder="Calle"/>
            </div>

            <div className="">
                <input type="number" onFocus={onFocus} id="altura" name='altura' value={altura} onChange={handleInput} className="form-input" placeholder="Altura"/>
            </div>
            
            <div className="">
                <input type="text" id="ciudad" name='ciudad' value={ciudad} onChange={handleInput} className="form-input" placeholder="Ciudad"/>
            </div>
        </div>

        <div className="mb-4">
            <label htmlFor="peso">Peso:</label>
            <select name="peso" onChange={handleInput} value={peso} id="peso">
                <option value="">Seleccione el peso</option>
                <option value="0-1">Menos de 1kg</option>
                <option value="1-3">Entre 1kg y 3kg</option>
                <option value="3-5">Entre 3kg y 5kg</option>
                <option value="5-7">Entre 5kg y 7kg</option>
                <option value="7-10">Entre 7kg y 10kg</option>
            </select>
        </div>
        <div className='mb-4'>
        <label htmlFor="" className='mr-2'>Seguro de viaje:</label>
        <div>
            <input type="radio" name='seguro' value='si' onChange={handleSeguro}/>Si
        </div>
        <div>
            <input type="radio" name='seguro'value='no'onChange={handleSeguro}/>No
        </div>
        </div>

        <button type="submit" className="form-button bg-blue-300">Calcular Presupuesto</button>
  </form>
      </div>
  )
}

export default Formulario