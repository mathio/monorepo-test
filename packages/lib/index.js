
export const defaultText = 'click here'

export const defaultOnClick = () => {console.log('you clicked the button')}

// main function for button
export const button = (
  text = defaultText,
  onclick = defaultOnClick,
  parent = document.body
) => {
  const btn = document.createElement('button')
  btn.innerHTML = text
  btn.onclick = onclick
  parent.appendChild(btn)
}

