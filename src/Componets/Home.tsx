/* eslint-disable no-console */
import {
  HomeOutlined,
  LogoutOutlined,
  MenuOutlined,
  MessageOutlined,

  UserOutlined
} from '@ant-design/icons'
import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Space,
  Tooltip,
  Typography
} from 'antd'

import React from 'react'
import { signOut } from '../firebase/auth'
const { Meta } = Card
const { Title } = Typography
const Home = (): React.ReactElement => {
  const Options = (
    <Menu>
      <Menu.Item
        onClick={() => {
          console.log('e')
        }}
        icon={<UserOutlined />}
      >
        Perfil
      </Menu.Item>
      <Menu.Item onClick={signOut} icon={<LogoutOutlined />}>
        Salir
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        
        className="site-page-header"
        title={
         <Title level={3}>FaceCar</Title>
        }
        style={{ backgroundColor: '#f0f5ff' }}
        extra={[
          <>
            <Space direction="vertical">
              <Space wrap>
                <Tooltip title={'Ir a Home'}>
                  <Button
                    shape={'circle'}
                    size={'large'}
                    type={'text'}
                  >
                    <HomeOutlined />
                  </Button>
                </Tooltip>
                <Tooltip title={'Ir a Home'}>
                  <Button
                    shape={'circle'}
                    size={'large'}
                    type={'text'}
                  >
                    <MessageOutlined />
                  </Button>
                </Tooltip>
                <Button
                  shape={'circle'}
                  size={'large'}
                  type={'text'}
                >
                  <Dropdown overlay={Options} placement="bottomRight">
                    <MenuOutlined size={200} />
                  </Dropdown>
                </Button>
              </Space>
            </Space>
          </>,
        ]}
      />
      <Row justify={'center'}>
        <Col xs={24}>
          <Row justify={'center'} gutter={[16, 16]} align={'middle'}>
            <Col xs={12} >
              <Row>
                <Tooltip title={'Click Para Ver Detalles de la Publicacion'}>
                <Col xs={24} style={{marginTop:'2%'}}>
                  <Card
                    hoverable
                    onClick={(e)=>{
                      // eslint-disable-next-line no-console
                      console.log(e);
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://cnet3.cbsistatic.com/img/nMoE20f4PXRsjkiuTZIL9dbM6sI=/940x0/2019/07/03/c83d8791-3cfe-4b2b-b6d8-219646c5333d/mazda-cx-5-2019-foto.jpg"
                      />
                    }
                    // actions={[
                    //   <SettingOutlined key="setting" />,
                    //   <EditOutlined key="edit" />,
                    //   <EllipsisOutlined key="ellipsis" />,
                    // ]} Para owners todo no eliminar 
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title="Mazda CX-5 2019"
                      description="Carro electrico"
                    />
                  </Card>
                </Col>
                </Tooltip>
                <Tooltip title={'Click Para Ver Detalles de la Publicacion'}>
                <Col xs={24} style={{marginTop:'2%'}}>
                  <Card
                    hoverable
                    onClick={(e)=>{
                      // eslint-disable-next-line no-console
                      console.log(e);
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://cnet3.cbsistatic.com/img/nMoE20f4PXRsjkiuTZIL9dbM6sI=/940x0/2019/07/03/c83d8791-3cfe-4b2b-b6d8-219646c5333d/mazda-cx-5-2019-foto.jpg"
                      />
                    }
                    // actions={[
                    //   <SettingOutlined key="setting" />,
                    //   <EditOutlined key="edit" />,
                    //   <EllipsisOutlined key="ellipsis" />,
                    // ]} Para owners todo no eliminar 
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title="Mazda CX-5 2019"
                      description="Carro electrico"
                    />
                  </Card>
                </Col>
                </Tooltip>
                <Tooltip title={'Click Para Ver Detalles de la Publicacion'}>
                <Col xs={24} style={{marginTop:'2%'}}>
                  <Card
                    hoverable
                    onClick={(e)=>{
                      // eslint-disable-next-line no-console
                      console.log(e);
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://cnet3.cbsistatic.com/img/nMoE20f4PXRsjkiuTZIL9dbM6sI=/940x0/2019/07/03/c83d8791-3cfe-4b2b-b6d8-219646c5333d/mazda-cx-5-2019-foto.jpg"
                      />
                    }
                    // actions={[
                    //   <SettingOutlined key="setting" />,
                    //   <EditOutlined key="edit" />,
                    //   <EllipsisOutlined key="ellipsis" />,
                    // ]} Para owners todo no eliminar 
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title="Mazda CX-5 2019"
                      description="Carro electrico"
                    />
                  </Card>
                </Col>
                </Tooltip>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Home
