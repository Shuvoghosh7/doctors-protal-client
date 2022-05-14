import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email,data.password)
    };
    let singInError;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    useEffect(()=>{
        if (gUser || user) {
            navigate(from, { replace: true });
        }
    },[gUser,user,from,gUser])
    if( loading || gLoading){
        return <Loading/>
    }
    

    if(error || gError){
      singInError= <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                             type="Email" 
                             placeholder="Your Email" 
                             className="input input-bordered w-full max-w-xs" 
                             {...register("email", {
                                required:{
                                    value:true,
                                    message:"Email is required"

                                },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: 'provide a valid email'
                                }
                              })}
                             />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input
                             type="password" 
                             placeholder="Your password" 
                             className="input input-bordered w-full max-w-xs" 
                             {...register("password", {
                                required:{
                                    value:true,
                                    message:"password is required"

                                },
                                minLength: {
                                  value: 6,
                                  message: 'must 6 character or longer'
                                }
                              })}
                             />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                
                            </label>
                        </div>
                        {singInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Login"/>
                    </form>
                    <p>New to Doctors Portal? <Link className='text-secondary' to="/singup">Create new account</Link></p>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;