import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from "./actions/increment"


const App = () => {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter {counter}</h1>
      <h1>Status: {isLogged ? `Signedin ` : "Not signed in"}</h1>
      <button onClick={() => dispatch(increment(13))}>Increase</button>
      <button onClick={() => dispatch(decrement(13))}>Decrease</button>
      <button onClick={() => dispatch(signIn())}>Sign in</button>
    </div>
  )
}

export default App;