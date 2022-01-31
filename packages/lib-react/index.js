import React from 'react'
import {defaultOnClick, defaultText} from '@mathio28/lib'

// button component
export const Button = ({ onClick = defaultOnClick, children = defaultText }) => (
  <button onClick={onClick}>{children}</button>
)
