export default function Btn ({className, text}, removeCb) {
  this.el = document.createElement('button')
  this.el.innerText = text || ''
  this.el.className = className || ''
  this.el.addEventListener('click', removeCb)
}