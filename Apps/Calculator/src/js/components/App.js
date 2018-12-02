import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'
import Calculator from './Calculator'


const App = () => (
  <div>
    <h1>This is App level</h1>
    <Calculator />
  </div>
)

export default hot(module)(App)
