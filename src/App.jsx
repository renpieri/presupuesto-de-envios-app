import { useState } from 'react'
import './App.css'
import Formulario from '../pages/Formulario'
import Lista from '../pages/Lista'
import Spinner from '../pages/Spinner'
function App() {

  const [ presupuesto, setPresupuesto ] = useState({
    cotizacion: 0,
    datos:{},
    seguro: ''
  });
  const [ cargando, setCargando ] = useState(false);

  const {datos, seguro} = presupuesto;

  return (

    <main className="">
      <h1 className="text-2xl text-center font-bold mb-2 bg-blue-300 p-5 text-white">Calculador de envíos</h1>
      <div className="form-container p-4">
        <Formulario setPresupuesto={setPresupuesto} setCargando={setCargando} />
        { cargando ? 
          <Spinner /> 
          : 
        <>
          <Lista datos={datos} seguro={seguro} />
          <div className='card-content bg-blue-300 mt-4 rounded'>
            {presupuesto.cotizacion === 0 ?
              <p className='text-center p-4 text-white'>Carga los datos</p>
            : 
              <p className='text-center p-5 text-white'>Total: ${presupuesto.cotizacion}</p>
            }
          </div>
        </>
        }
      </div>
    </main>

  )
}

export default App
