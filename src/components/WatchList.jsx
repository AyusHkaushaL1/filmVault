import React, { useEffect, useState } from 'react'
import genreids from '../utility/genre'
function WatchList({ watchList }) {

  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre , setCurrGenre]=useState('All Genres')
  let handleSearch = (e) => {
    setSearch(e.target.value)

  }

  let handleFilter = (genre) =>{
    setCurrGenre(genre)
  }

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    temp= new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  }, [watchList])

  return (
    <>
    <div className='flex justify-center flex-wrap m-4'>
      {genreList.map((genre) => {
        return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre?'rounded-md flex justify-center h-[1.7rem] w-[5rem] item-center bg-blue-400 text-white font-bold mx-4' :'rounded-md flex justify-center h-[1.7rem] w-[5rem] item-center bg-gray-400/50 text-white font-bold mx-4' }>{genre}</div>
      })}

      </div>
      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} placeholder='Search Movies' className='px-4 h-[2rem] w-[18rem] bg-gray-200 outline-none' type="text" />
      </div>
      <div className='overflow-hidden rounded-lg m-4 border border-gray-200'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>

              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchList.filter((movieObj)=>{
              if(currGenre=='All Genres'){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currGenre;
              }
            }).filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              return (<tr className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img className='w-[10rem] h-[6rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} />
                  <div className='mx-10'>{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default WatchList
