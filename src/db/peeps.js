import Firebase from '../firebase'

const fetchPeeps = () => {
  return new Promise((resolve, reject) => {
    Firebase.collection('app').doc('peeps').get().then((doc) => {
      if (doc.exists) {
        resolve(doc.data())
      } else {
        reject('No such document!')
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

export {
  fetchPeeps
}
