
// main function for button
const button = (
  text = 'click me',
  onclick = () => {console.log('you clicked the button')},
  parent = document.body
) => {
  const btn = document.createElement('button')
  btn.innerHTML = text
  btn.onclick = onclick
  console.log('parent', parent)
  parent.appendChild(btn)
}

window.button = button
