import { ConfigProvider } from 'antd'
import React from 'react'
import Spanish from 'antd/lib/locale/es_ES'
import Routes from './routes'
import './styles/index.less'

function App(): React.ReactElement {
  return (
    <ConfigProvider locale={Spanish}>
      <Routes />
    </ConfigProvider>
  )
}

export default App
