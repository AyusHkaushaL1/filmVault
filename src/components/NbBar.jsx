import React from 'react'
import { Link } from 'react-router-dom'
function NbBar() {
  return (
    <div className='flex border space-x-7 items-center pl-2 py-4'>
        <img className="w-12" src="https://png.pngtree.com/element_our/png/20181113/clapperboard-film-logo-icon-design-template-vector-isolated-png_236642.jpg" alt="" />
        <Link to="/"  className='text-red-600 text-xl font-bold'>Movies</Link>
         <Link to="/watchList"  className='text-black text-xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default NbBar