import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Navbar from '../components/Navbar'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
})
    .required()

export default function SigninPage() {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:3210/api/v1/user/signin', data, { withCredentials: true })
            console.log(data)
            if (res.data.success == true) {
                toast.success(res.data.message)
                if (data.role == "user") {
                    navigate('/')
                } else {
                    navigate('/')
                }
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Error in Login")
            console.log(error)
        }

    }


    return (
        <div className='h-dvh'>
            <div className="h-[90%] flex justify-center items-center bg-[url('https://preview.redd.it/2jhtmqhg4mo81.png?width=1920&format=png&auto=webp&s=0d41709c3c478d2bcadfd8f2450271f175c0676f')] bg-center bg-no-repeat bg-cover">
                

                <div className='flex flex-col form-control gap-5 bg-black px-14 pb-12 pt-10 rounded-lg shadow-md' onSubmit={handleSubmit(onSubmit)}>
                    <label className='textarea-md text-2xl font-bold ml-12 mb-1'>SIGN-IN</label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" className="grow" placeholder="Email" {...register("email")} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" placeholder="Password"{...register("password")} />
                    </label>

                    <button type='submit' className="btn btn-outline">Login</button>

                    <label htmlFor="">Don't have an account ? <Link to='/signup' className='underline underline-offset-2'>Signup</Link></label>

                </div>

            </div>
        </div>
    )
}
