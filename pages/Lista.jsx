import React from 'react'

const Lista = ({datos, seguro}) => {

    const {producto, peso, envio, calle, altura, ciudad} = datos

    if(producto === '' || peso === '' || envio === '' || seguro === '') return null

  return (
    <div className="card">
    <h2 className="card-title">Información del Presupuesto:</h2>
    <div id="info-container" className="card-content">    
      <p> Producto: {producto} </p>
      <p> Peso: {peso}kg </p>
      <p> Envio a: {envio} </p>
      <p> Seguro: {seguro} </p>

      { envio === 'domicilio' ?
        <>
          <p> Dirección: {calle} {altura}, {ciudad} </p>
        </>
        :
        null
      }

      {}
    </div>
  </div>
  )
}

export default Lista