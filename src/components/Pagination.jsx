import React from 'react'

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className='bg-gray-400 mt-2 flex justify-center'>
      <div onClick={handlePrev} className='px-8 cursor-pointer'>◀️</div>
      <div className='font-bold'>{pageNo}</div>
      <div onClick={handleNext} className='px-8 cursor-pointer'>▶️</div>
    </div>
  )
}

export default Pagination;
