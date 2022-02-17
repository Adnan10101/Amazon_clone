 import React,{useState} from 'react'
 import "./Login.css"
 import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase'
 
 function Login() {
     const history = useHistory()
     const[email,setEmail] = useState("")
     const[password, setPassword] = useState("")

     const login = (event) =>{
        event.preventDefault()   // stops refresh
        //login logic here
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            //logged in, redirect to homepage
            history.push('/')
        })
            //if incorrect username or password give an alert
        .catch(e => alert(e.message))
     }

     const emailFunction =(event)=> {
            setEmail(event.target.value)     //this email and password r the same way but password is using inline function
     }
     


     const register = (event) =>{
         event.preventDefault()   //stop refresh
         //register logic here

         auth.createUserWithEmailAndPassword(email,password)
         .then(auth =>{
             //created a user and logged in, redirect to homepage
             history.push("/")
         })
         .catch(e => alert(e.message))
     }

     
     

     return (
         <div className="login">
            <Link to="/">
                <img   
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt=""
                /> 
            </Link>

            <div className="login_container">
                <h1>Sign in </h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={emailFunction} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={event =>setPassword(event.target.value)} type="password"></input>
                    <button onClick = {login}  type="submit" className="login_signin">Sign in</button>
                   
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_register">Creat your Amazon account</button>

            </div>
         </div>
     )
 }
 
 export default Login
 