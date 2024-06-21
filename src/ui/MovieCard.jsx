import React from 'react'

export default function MovieCard() {
    return (

        <div className="rounded-md w-72 h-80 group bg-no-repeat bg-center bg-cover bg-[url('https://dx35vtwkllhj9.cloudfront.net/paramountpictures/if/images/gallery-ca/image18.jpg')]">
            <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 pt-32"
            >
                <div className="card-body">
                    <h2 className="card-title text-black">Shoes!</h2>
                    <p className='text-black'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
