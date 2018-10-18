import Firebase from './firebase'

import { fetchPeeps } from './db/peeps'
import { createPun, removePun } from './db/puns'
import Pun from './models/pun'
import OptionElement from './htmlUtils/option'
import PunElement from './htmlUtils/pun'

const namesDropdown = document.getElementById('Names')
const inputElement = document.getElementById('PunText')
const createButton = document.getElementById('PunCreate')
const punsList = document.getElementById('Puns')

const createPunAction = () => {
  const pun = inputElement.value
  const selectedNames = namesDropdown.selectedOptions
  if (pun.length < 1 || selectedNames.length < 1) return
  const name = selectedNames[0].value
  createPun(new Pun({pun, name}))
  inputElement.value = ''
}

const removePunAction = (id) => {
  return (event) => {
    removePun(id)
  }
}

Firebase.collection('puns').onSnapshot(sn => {
  sn.docChanges().forEach(d => {
    const pun = new Pun({
      id: d.doc.id,
      ...d.doc.data()
    })
    if (d.type === 'added') {
      punsList.appendChild(new PunElement(pun, removePunAction).el)
    } else if (d.type === 'modified') {
      const el = document.getElementById(d.doc.id)
      el.replaceWith(new PunElement(pun, removePunAction).el)
    } else if (d.type === 'removed') {
      document.getElementById(d.doc.id).remove()
    }
  })
})

fetchPeeps().then(data => {
  data.names.forEach(name => {
    namesDropdown.add(new OptionElement(name).el)
  })
})
createButton.addEventListener('click', createPunAction)
inputElement.addEventListener('keypress', (e) => {
  const key = e.which || e.keyCode;
  if (key === 13) {
    createPunAction()
  }
})