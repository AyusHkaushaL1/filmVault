import React from 'react';

function MovieCard({ movieObj, poster_path, name, handleAddWatchList, handleRemoveFromWatchList, watchList }) {
  function doesContain(movieObj) {
    return watchList.some((m) => m.id === movieObj.id);
  }

  const imageUrl = (poster_path?.startsWith('http'))
    ? poster_path
    : `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{ backgroundImage: `url(${imageUrl})` }}>
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchList(movieObj)} className="ml-1 mt-1 rounded-md bg-gray-900 w-[25px] text-white text-center">❌</div>
      ) : (
        <div onClick={() => handleAddWatchList(movieObj)} className="ml-1 mt-1 rounded-md bg-gray-900 w-[25px] text-white text-center">💖</div>
      )}
      <div className='mt-40 text-white text-center w-full p-2 rounded-xl bg-gray-900/60'>{name}</div>
    </div>
  )
}

export default MovieCard




