import React from 'react';
import './SignUp.css'

const Login = () => {
    return (
        <section id='SignUp'>
            <div className="signCard">
                <div className="loginText">
                    <h1>Registration</h1>
                </div>

                <form action="">
                    <input type="text" placeholder='Enter your name' />
                    <input type="email" placeholder='Enter your email' />
                    <input type="password" placeholder='Create a password' />
                    <input type="password" placeholder='Confirm a password' />

                    <div className="uplaod">
                        <label htmlFor="" style={{fontWeight: 'bold'}}>Upload image</label>
                        <input type="file" style={{ border: 'none', padding: '20px' }} />
                    </div>



                    <div className="check">
                        <input type="checkbox" />
                        <p>I accept all terms and conditions</p>
                       
                    </div>

                    <button>Register Now</button>

                    <p>Already have an account? <a href="#">Login now</a></p>

                </form>



            </div>
        </section>
    )
}

export default Login