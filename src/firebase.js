import firebase from 'firebase/app'
import 'firebase/firestore'
import config from '../firebase.config'


firebase.initializeApp(config)
const firestore = firebase.firestore()
const settings = {/* your settings... */ timestampsInSnapshots: true}
firestore.settings(settings)

export default firestore
