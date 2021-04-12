import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Divider, Form, Input, Row } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { loggIn } from '../firebase/auth'
import CustomLayoutBoxShadow from './LayoutBoxShadow'
const { Item } = Form
import { Image,  } from 'antd'

const { Password } = Input
const Login = (): React.ReactElement => {
  const route = useHistory()
  return (
    <Row
      justify={'center'}
      align={'middle'}
      style={{ textAlign: 'center', height: '100vh' }}
    >
      <Col xs={6}>
        <CustomLayoutBoxShadow>
          <Row style={{ height: '60vh' }}>
            <Col xs={24} style={{ margin: '1%' }}>
              {' '}
              <Avatar
              shape="square"
                size={64}
                src={
                  <Image
                  
                    preview={false}
                    width={'100%'}
                    src={`assets/FondoNegro.jpg`}
                  />
                }
              />
            </Col>
            <Col xs={24}>
              <Form
                style={{ textAlign: 'center' }}
                onFinish={({ username, password }) => {
                  loggIn(username, password)
                }}
              >
                <Item
                  required
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'El campo Usuario es requerido',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder={'Usuario'} />
                </Item>
                <Item
                  required
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'El campo Contraseña es requerido',
                    },
                  ]}
                >
                  <Password
                    prefix={<LockOutlined />}
                    placeholder={'Contraseña'}
                  />
                </Item>
                <Item>
                  <Button
                    htmlType="submit"
                    type="primary"
                    // disabled={isSubmitted}
                    // loading={isSubmitted}
                  >
                    Iniciar Sesión
                  </Button>
                </Item>
              </Form>
              <Divider style={{ padding: 0, margin: 0 }} orientation={'center'}>
                o
              </Divider>
              <Button
                onClick={() => {
                  route.push('SIGNIN')
                }}
                type={'link'}
              >
                Registrar
              </Button>
            </Col>
          </Row>
        </CustomLayoutBoxShadow>
      </Col>
    </Row>
  )
}
export default Login
