import React from 'react'
import Navbar from '../components/Navbar'
import MovieCarousel from '../components/MovieCarousel'
import MovieList from '../components/MovieList'

export default function Index() {
  return (
    <div>
        <MovieCarousel />
        <MovieList />
    </div>
  )
}
