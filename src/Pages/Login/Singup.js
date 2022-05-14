import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import Loading from '../Shared/Loading/Loading';

const Singup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true} );
      const [updateProfile, updating, updatingerror] = useUpdateProfile(auth);
      const navigate=useNavigate()

      if (gUser || user ) {
        console.log(gUser,user)
    }
    if( loading || gLoading || updating){
        return <Loading/>
    }

    let singInError;
    if(error || gError || updatingerror){
      singInError= <p className='text-red-500'>{error?.message || gError?.message || updatingerror?.message}</p>
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({ displayName:data.name})
        navigate("/appointment")
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sing Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                             type="name" 
                             placeholder="Your Name" 
                             className="input input-bordered w-full max-w-xs" 
                             {...register("name", {
                                required:{
                                    value:true,
                                    message:"name is required"

                                }
                              })}
                             />
                            <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            
                                
                            </label>
                        </div>
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
                        <input className='btn w-full max-w-xs' type="submit" value="Sing Up"/>
                    </form>
                    <p>Allready have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>Sing up With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Singup;