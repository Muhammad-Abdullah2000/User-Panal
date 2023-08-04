import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <section id='Login'>
            <div className="loginCard">
                <div className="loginText">
                    <h1>Login</h1>
                </div>

                <form action="">
                    <input type="text" placeholder='Enter your email' />
                    <input type="password" placeholder='Confirm a password' />


                    <div className="check">
                        <input type="checkbox" />
                        <p>Remember me</p>
                        <a href="#">Forget Password?</a>
                    </div>

                    <button>Login Now</button>

                    <p>Don't have an account? <a href="#">Signin now</a></p>

                </form>



            </div>
        </section>
    )
}

export default Login