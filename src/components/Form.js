import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const validateEmail = ()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            setEmailError('Email is Invalid')
            return false;
        }
        setEmailError('')
        return true;
    }

    const validatePassword = ()=>{
        if(password.length < 6){
            setPasswordError('Password must be at least 6 character long')
            return false;
        }
        setPasswordError('')
        return true;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if(isEmailValid && isPasswordValid){
            console.log('form submitted',{email, password})
        }
    }

  return (
    <div>
    <h2>Sign In</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <level>Email</level>
        <input
        type='email'
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        />
        {emailError && <p style={{color:'red'}}>{emailError}</p>}
      </div>
      <div>
        <level>Password</level>
        <input
        type='password'
        value={password}
        onChange={handlePasswordChange}
        onBlur={validatePassword}
        />
        {passwordError && <p style={{color:'red'}}>passwordError</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default Form