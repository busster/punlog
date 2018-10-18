export default function Div ({className, text}) {
  this.el = document.createElement('div')
  this.el.innerText = text || ''
  this.el.className = className
}