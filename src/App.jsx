import React, { useEffect, useState } from 'react'
import NbBar from './components/NbBar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
function App() {
  let [watchList, setWatchList] = useState([])


  let handleAddWatchList =(movieObj)=>{
    let newWatchList = [...watchList, movieObj]
    localStorage.setItem('MoviesKey' , JSON.stringify(newWatchList))  // here we are using our local storage so that if we save any movie in our watchlist it won't refresh if we restart our application means our movies will not get deleted
    setWatchList(newWatchList)
    console.log(newWatchList)
  }


  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList)
    console.log(filteredWatchList)
  }
  
  useEffect(()=>{
    let MoviesFromLocalStorage = localStorage.getItem('MoviesKey')
    if(!MoviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(MoviesFromLocalStorage))
  },[])
  


  return (
    <>
      <BrowserRouter>
        <NbBar />
        <Routes>
          <Route path='/' element={<><Banner /> <Movies watchList={watchList} handleAddWatchList={handleAddWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} /></>} />
          <Route path='/watchList' element={<WatchList watchList={watchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

