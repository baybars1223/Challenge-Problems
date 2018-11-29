import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'
import Calculator from './Calculator'


const App = () => (
  <h1>
    Hello, world.<br />
    <Counter />
    <Calculator />
  </h1>
)

export default hot(module)(App)
