
import React from 'react';


function MovieCard({ movieObj, poster_path, id, name, handleAddWatchList, handleRemoveFromWatchList, watchList }) {

  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true
      }
    }
    return false
  }

  return (
    <div key={id}
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}>

      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchList(movieObj)} className="ml-1 mt-1 rounded-md bg-gray-900 w-[25px]">
          &#x274c;
        </div>
      ) : (
        <div
          onClick={() => handleAddWatchList(movieObj)}
          className="ml-1 mt-1 rounded-md bg-gray-900 w-[25px]"
        >
          &#128525;
        </div>
      )
      }


      <div className='mt-40  text-whitetext-center w-full p-2 text-white rounded-xl text-center bg-gray-900/60'>
        {name}
      </div>

    </div>
  );
}

export default MovieCard;





