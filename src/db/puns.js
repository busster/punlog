import Firebase from '../firebase'

const createPun = (punData) => {
  const punRef = Firebase.collection('puns').doc()
  punRef.set({
    pun: punData.pun,
    name: punData.name,
    date: punData.date
  })
}

const removePun = (id) => {
  Firebase.collection('puns').doc(id).delete().then(() => {
      console.log('Removed Doc')
  }).catch((error) => {
      console.warn(error)
  })
}

const fetchPuns = () => {
  return new Promise((resolve, reject) => {
    Firebase.collection('puns').onSnapshot((snapshot) => {
      console.log(snapshot)
      resolve(snapshot.docChanges().map(change => change.doc))
    })
  })
}

export { createPun, fetchPuns, removePun }
