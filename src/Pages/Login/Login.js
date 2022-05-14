import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user)
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>

                     <div class="divider">OR</div>
                     <button class="btn btn-outline btn-accent" onClick={()=>signInWithGoogle()}>Button</button>
                </div>
            </div>
        </div>
    );
};

export default Login;