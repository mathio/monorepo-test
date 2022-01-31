import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './index.js'

ReactDOM.render(
  <>
    <h1>demo button</h1>
    <Button onClick={() => alert('thank you for clicking the button')} />
  </>,
  document.querySelector('#root')
);
