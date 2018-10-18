import moment from 'moment'

export default function Pun ({ id, pun, name, date }) {
  this.id = id
  this.pun = pun
  this.name = name
  if (date === undefined) {
    const d = new moment()
    this.date = d.toString()
  } else {
    this.date = moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
}
