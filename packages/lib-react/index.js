import React from 'react'
import {defaultOnClick, defaultText} from '@mathio28/lib'

export const Button = ({ onClick = defaultOnClick, children = defaultText }) => (
  <button onClick={onClick}>{children}</button>
)
