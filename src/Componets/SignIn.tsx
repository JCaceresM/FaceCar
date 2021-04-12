import { LockOutlined, MailTwoTone, PhoneTwoTone,UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Divider, Form, Input, Row } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { signIn } from '../firebase/auth'
import CustomLayoutBoxShadow from './LayoutBoxShadow'
const { Item } = Form
const { Password } = Input
import { Image,  } from 'antd'
const SignIn = (): React.ReactElement => {
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
            <Col xs={24} style={{ margin: '2%' }}>
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onFinish={({ Nombre, phonenumber,newpassword ,Email}) => {
                  signIn(Nombre,Email, newpassword,phonenumber)
                }}
              >
                <Item
                  required
                  name="Nombre"
                  rules={[
                    {
                      required: true,
                      message: 'El campo Nombre es requerido',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder={'Nombre'} />
                </Item>
                <Item
                  required
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: 'El campo email es requerido',
                    },
                  ]}
                >
                  <Input prefix={<MailTwoTone />} placeholder={'email'} />
                </Item>
                <Item
                  required
                  name="phonenumber"
                  rules={[
                    {
                      required: true,
                      message: 'El campo numero de telefono es requerido',
                    },
                  ]}
                >
                  <Input prefix={< PhoneTwoTone />} placeholder={'Numero'} />
                </Item>

                <Item
                  required
                  name="newpassword"
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
                
                  >
                    Registrarse
                  </Button>
                  <Divider
                    style={{ padding: 0, margin: 0 }}
                    orientation={'center'}
                  >
                    o
                  </Divider>
                  <Button
                    onClick={() => {
                      route.push('LOGIN')
                    }}
                    type={'link'}
                  >
                    Iniciar Session
                  </Button>
                </Item>
              </Form>
            </Col>
          </Row>
        </CustomLayoutBoxShadow>
      </Col>
    </Row>
  )
}
export default SignIn
