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
const signIn = (nombre: string, email: string, password: string,phonenumber: number): void => {
  dbAuth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      (result.user as  any).updateProfile({
        displayName: nombre,
        phoneNumber: phonenumber
    }).then(function() {
        // Update successful.
    }, function(error: { message: any }) {
         showNotification({
        title: 'Error',
        description: error.message,
        type: 'error',
      })
    });        
      return result
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
