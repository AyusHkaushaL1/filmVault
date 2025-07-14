import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import { bollywoodMovies } from '../Utility/DemoData'

function Movies({ handleAddWatchList, handleRemoveFromWatchList, watchList }) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if (pageNo > 1) setPageNo(pageNo - 1)
  }
  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0424d955eae0435efb83b3de14ce26ec&language=en-US&page=${pageNo}`)
      .then(res => {
        if (res.data.results) {
          setMovies(res.data.results)
        }
      })
      .catch(err => {
        console.log("API error. Loading demo movies.")
        setMovies(bollywoodMovies)
      })
  }, [pageNo])

  return (
    <div className='p-5'>
      <div className='m-5 text-2xl font-bold text-center'>Trending Movies</div>
      <div className='gap-5 flex flex-wrap justify-around'>
        {movies.map((movieObj) => (
          <MovieCard key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path || movieObj.backdrop_path}
            name={movieObj.title || movieObj.original_title}
            handleAddWatchList={handleAddWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchList={watchList} />
        ))}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default Movies
