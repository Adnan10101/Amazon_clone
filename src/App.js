
import React,{useEffect} from "react"
import './App.css'
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useStateValue } from "./StateProvider"
import {auth} from "./firebase"


function App() {
  const[{user},dispatch] = useStateValue()

  //piece of code that runs based on a given condition -- useEffect

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }else{
        //user is logged out
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })
      return () =>{
        //any cleanup operations go in here
        unsubscribe()
      }
  }, [])

  //console.log("user",user)

  return (
    <Router>
      <div className="app">
        <Switch>
          {/**checkout page */}
          <Route path ="/checkout">
              <Header/> 
              <Checkout />
              </Route>
              {/**login page */}
          <Route path="/login">
              <Login />
            </Route>  
            {/**main page */}
            {/**DEFAULT PAGE */}
            <Route path="/">
            <Header />
            <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
