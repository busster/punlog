export default function Li ({id, text}) {
  this.el = document.createElement('li')
  this.el.innerText = text || ''
  this.el.id = id
}