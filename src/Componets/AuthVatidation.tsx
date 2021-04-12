import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import { dbAuth } from '../firebase/firebaseConfig';
type Props = {
  children: ReactElement[] | ReactElement
}
let router;
const AuthVatidation = ( props:Props): React.ReactElement => {
  router = useHistory()
  dbAuth.onAuthStateChanged((user: any) => {
  if (user) {
    // eslint-disable-next-line no-console
    console.log(user);
    router.push('/HOME')
  } else {
    router.push('/LOGIN')
  }
});
  return <> {props.children}</>
}
export default AuthVatidation