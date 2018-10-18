export default function Option (text) {
  this.el = document.createElement('option')
  this.el.innerText = text
  this.el.value = text
}