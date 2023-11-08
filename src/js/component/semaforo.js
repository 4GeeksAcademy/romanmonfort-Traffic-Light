import React, { useState } from 'react'

const Semaforo = () => {

    const [color, setColor] = useState('rojo')


    return (
        <div className='semaforo container row d-flex justify-content-center align-items-center'>
            <div className='col-2  sem'>

                <div className='row  d-flex'>
                    {color == "rojo" ? <div className='col rojo activo' onClick={() => setColor("rojo")}></div> :
                        <div className='col rojo ' onClick={() => setColor("rojo")}></div>}
                </div>
                <div className='row   d-flex'>
                    {color == "amarillo" ? <div className='col amarillo activo' onClick={() => setColor("amarillo")}></div> :
                        <div className='col amarillo ' onClick={() => setColor("amarillo")}></div>}
                </div>
                <div className='row   d-flex'>
                    {color == "verde" ? <div className='col verde activo' onClick={() => setColor("verde")}></div> :
                        <div className='col verde' onClick={() => setColor("verde")}></div>}
                </div>
            </div>
        </div>
    )
}

export default Semaforo
