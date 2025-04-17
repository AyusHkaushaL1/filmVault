
import { useState } from 'react'
import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddWatchList , handleRemoveFromWatchList, watchList}) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if (pageNo === pageNo) {
      setPageNo(1)
    }
    else {
      setPageNo(pageNo - 1)
    }
  }
  const handleNext = () => {
    setPageNo(pageNo + 1)
  }
  


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0424d955eae0435efb83b3de14ce26ec&language=en-US&page=${pageNo}`).then(function (res) {
      console.log(res.data.results)
      setMovies(res.data.results)

    })
  }, [pageNo])


  return (
    <div className='p-5 '>

      <div className='m-5 text-2xl font-bold text-center'>
        Trending Movies
      </div>
      <div className='gap-5 flex flex-row flex-wrap justify-around'>

        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.
            original_title
          } handleAddWatchList={handleAddWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/>
        })}

      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=0424d955eae0435efb83b3de14ce26ec&language=en-US&page=2



