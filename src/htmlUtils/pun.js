import Li from './li'
import Div from './div'
import Btn from './btn'

export default function PunElement (pun, removeCb) {
  this.el = new Li({id: pun.id}).el

  const topDiv = new Div({className: 'puntop'}).el
  const bodyDiv = new Div({className: 'punbody'}).el

  const nameDiv = new Div({className: 'name', text: pun.name}).el
  const dateDiv = new Div({className: 'date', text: pun.date}).el
  const punDiv = new Div({className: 'pun', text: pun.pun}).el
  const removeBtn = new Btn({className: 'delete', text: 'x'}, removeCb(pun.id)).el

  topDiv.append(dateDiv)
  topDiv.append(removeBtn)
  bodyDiv.append(nameDiv)
  bodyDiv.append(punDiv)

  this.el.append(topDiv)
  this.el.append(bodyDiv)
}