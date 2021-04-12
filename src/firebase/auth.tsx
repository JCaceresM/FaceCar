import { showNotification } from '../Componets/ShowNotification'
import { dbAuth } from './firebaseConfig'

const loggIn = (email: string, password: string): Promise<any> => {
  return dbAuth
    .signInWithEmailAndPassword(email, password)
    .then((user: any) => {
      return user
    })
    .catch((error: any) => {
      showNotification({
        title: 'Error',
        description: error.message,
        type: 'error',
      })
      return error
    })
}
const signIn = (email: string, password: string): void => {
  dbAuth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return user
    })
    .catch((error) => {
      showNotification({
        title: 'Error',
        description: error.message,
        type: 'error',
      })
      return error
    })
}
const signOut = (): void => {
  dbAuth
    .signOut()
    .then()
    .catch((error) => {
      showNotification({
        title: 'Error',
        description: error.message,
        type: 'error',
      })
      return error
    })
}

export { loggIn, signIn, signOut }
