import React from 'react'
import MovieCard from '../ui/MovieCard'

export default function MovieList() {
    return (
        <div className='container mx-auto px-28 mt-0 h-auto'>
            <div className='shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px,rgba(0,0,15,0.5)_-10px_5px_4px_0px] mt-0 pl-5 pr-20 pb-10'>
                <p className="pt-10 font-sans tracking-widest font-bold textarea-lg text-3xl text-white">Now Showing</p>

                <div className='pl-20 pt-10 h-auto flex flex-auto justify-between'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </div>
    )
}
