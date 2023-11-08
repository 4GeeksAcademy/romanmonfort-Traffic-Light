import React, { useState } from 'react'

const Semaforo = () => {

    const [color, setColor] = useState('rojo')

    function otroColor(){
        if (color === "rojo") { setColor("verde");} 
         if (color === "verde") { setColor("amarillo");} 
         if (color === "amarillo") {setColor("rojo"); }
         if (color === "purpura") {setColor("rojo"); }
    }

    return (
        <div className='container text-center'>


            <div className='semaforo container row d-flex justify-content-center align-items-center'>
                <div className='col-2  justify-content-center align-items-center sem'>
    
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
                    <div className='row   d-flex'>
                        {color == "purpura" ? <div className='col purpura activo' onClick={() => setColor("purpura")}></div> :
                            <div></div>}
                    </div>
                <div className='row  mt-3'>
                </div>
                </div>
            </div>
                <button className='col-2 btn btn-primary border me-4' onClick={() => setColor(otroColor)}>o</button>
                <button className='col-2 btn btn-primary border me-4' onClick={() => setColor("purpura")}>Purpura!!</button>
        </div>
    )
}

export default Semaforo
