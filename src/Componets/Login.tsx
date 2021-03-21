import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { loggIn } from '../firebase/auth';
import CustomLayoutBoxShadow from './LayoutBoxShadow';
const { Item } = Form
const { Password } = Input
const Login = (): React.ReactElement => {
  return (
    <Row
      justify={'center'}
      align={'middle'}
      style={{ textAlign: 'center', height: '100vh' }}
    >
      <Col xs={8}>
        <CustomLayoutBoxShadow>
          <Row>
            <Col xs={24} style={{ margin: '2%' }}>
              {' '}
              <Avatar size={64} icon={<UserOutlined />} />
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
                  <Input
                    prefix={<UserOutlined />}
                    placeholder={'Usuario'}
                  />
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
            </Col>
          </Row>
        </CustomLayoutBoxShadow>
      </Col>
    </Row>
  )
}
export default Login
