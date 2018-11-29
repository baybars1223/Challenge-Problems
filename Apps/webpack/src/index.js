import React from 'react'
import { render } from 'react-dom'
import App from './js/components/App'
import css from './styles/main.css'

const root = document.createElement('div')
document.body.appendChild(root)

render(<App />, root)
