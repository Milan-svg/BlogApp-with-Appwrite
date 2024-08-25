import React, { useState } from 'react'
import {Button, Logo, Input} from "./index"
import {useForm} from 'react-hook-form'
import authService from '../Appwrite/appwriteAuth'
import {login} from '../store/AuthenticationSlice'
import {useDispatch} from 'react-redux'
import {Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const createAcc = async(data)=> {
        setError("")
        try {
            const userData= await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }

    }
  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%"/>
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign Up to create an account!</h2>
        <p className="mt-2 text-center text-base text-black/60">Already have an account?&nbsp;
            <Link  to="/login" className="font-medium text-primary transition-all duration-200 hover:underline"
            >Sign in</Link>
        </p>

        {error && <p className='text-red-600 text-center mt-8'>{error}</p>}

        <form onSubmit={handleSubmit(createAcc)}>
            <div className='space-y-5'>
                <Input
                label= "Full Name:"
                placeholder= "Enter your Full name"
                {...register("name", {
                    required: true,
                })}
                />
                <Input
                label= "Email :"
                placeholder= "Enter your Email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label= "Password :"
                placeholder= "Enter your Password"
                {...register("password", {
                    required: true,})}
                />
                <Button type="submit" className="w-full">Sign Up</Button>


            </div>
        </form>
        </div>

    </div>
  )
}

export default SignUp