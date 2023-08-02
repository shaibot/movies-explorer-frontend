import React from 'react'
import './More.css'

function More ({setCountFilms, countFilms, value}) {

  function addViewFilms() {
    let count = countFilms
    if(window.innerWidth > 1100) count += 3
    else if(window.innerWidth > 680) count += 2
    else count += 2
    setCountFilms(count)
  }

  return (
      <div className="more">
       {value && <button onClick={addViewFilms} className='more__btn'>Ещё</button>}
      </div>
  )
};

export default More