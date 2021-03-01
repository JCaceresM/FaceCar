import React from 'react'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/firestore'
import './styles/index.less'
import { FirebaseAppProvider } from 'reactfire'
import { Result } from 'antd'

function App(): React.ReactElement {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Result />
    </FirebaseAppProvider>
  )
}

export default App
