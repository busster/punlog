import Div from './div'

export default function PunTotal (punTotal, removeCb) {
  this.el = new Div({text: `Total Puns: ${punTotal}`}).el
  // this.updateEl
}
