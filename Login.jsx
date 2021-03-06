import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'
import { Image, Layout, Modal, } from 'antd';
import '../views/All.css'
import '../views/Menucss.css'
import 'antd/dist/antd.css'
import { Form, Input, Button, } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons'
import signinUser from '../contexts/AuthContext'



const { Header, Content, Footer } = Layout;

const LoginForm = () => {
    //context
    const { loginUser } = useContext(AuthContext)
    //router
    const history = useHistory()
    //local state
    const [loginForm, setLoginForm] = useState([{
        username: '',
        password: '',
        role: ''
    }]);

    const { username, password } = loginForm

    const onChangeLoginForm = event => setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

    const login = async event => {
        event.preventDefault()
        try {
            const loginData = await loginUser(loginForm)
            if (loginData.success) {
                history.push('/menu')
                // console.log(loginData)
            } else {
                alert(`Internal username or password!!  `)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <Layout>
            <Header className="header" style={{ background: '#97cbff', height: '100%' }}>
                <h1 className='title-header'>
                    Welcome to the PassBook
                </h1>
                <div style={{ display: 'flex', }}>
                    <div>
                        <Button onClick={showModal} type='text' style={{ background: '#97cbff' }}><UserOutlined /> LOGIN </Button>
                    </div>
                    <div style={{ paddingLeft: 5 }}>
                        <Button onClick={() => history.push('/register')} type='text' style={{ background: '#97cbff' }}> <UserAddOutlined />  REGISTER</Button>
                    </div>
                </div>
            </Header>
            <Layout >
                <Content style={{ marginTop: '50px' }}>
                    <Modal title="Login Or Register" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <div style={{ paddingTop: '50px' }} >
                            <Form >
                                <Form.Item style={{ alignContent: 'center', }}>
                                    <Input style={{ borderRadius: '100px', display: 'flex' }} type='text' placeholder='username' name='username' value={username} onChange={onChangeLoginForm} required></Input>
                                    <Input style={{ borderRadius: '100px', display: 'flex' }} type='password' placeholder='password' name='password' value={password} onChange={onChangeLoginForm} required></Input>
                                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                                        <div className='formongnoi' >
                                            <div style={{ overflow: 'hidden' }}>
                                                <Button style={{ width: '100%' }} className='btn' type='submit' onClick={login} >LOGIN</Button>
                                            </div>
                                        </div>
                                        <div className='formongnoi' style={{ paddingLeft: '10px' }} >
                                            <div style={{ overflow: 'hidden', }}>
                                                <Link to='/register'>  <Button className='btn' type='submit' >Register</Button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>

                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0 auto', padding: 20, background: 'white' }}>
                        <div>
                            <Image
                                width={400}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuO3JklsJQdnWpofhmTg_Rb_HPl5I2S-FAQ&usqp=CAU"
                                preview={{
                                    src: 'https://mayruaxemay.vn/wp-content/uploads/2021/03/tran-duc-bo-meo-meo.jpg',
                                }}
                            />
                        </div>
                        <div style={{ display: 'block', width: '50% ' }}>
                            <h1 style={{ textAlign: 'center' }}>Alo l?? c?? ti???n</h1>
                            <ul>
                                <li> L??i su???t t???i thi???u t??? 18%/n??m - t???i ??a 38%/n??m t??nh tr??n d?? n??? gi???m d???n (??i???u kho???n v?? ??i???u ki???n ??p d???ng)</li>
                                <li> Kho???n vay l??n ?????n 12 l???n thu nh???p h??ng th??ng v?? t???i ??a 300 tri???u ?????ng, cho m???c ????ch ti??u d??ng, ph???c v??? ?????i s???ng</li>
                                <li> Th???i h???n vay t??? t???i thi???u 12 th??ng ?????n t???i ??a 48 th??ng</li>
                                <li>V?? d???: V???i kho???n vay t??n d???ng 60 tri???u ?????ng, th???i h???n vay 12 th??ng, l??i su???t 18%, h???ng th??ng b???n ch??? ph???i thanh to??n 5.500.800 ?????ng.    </li>
                            </ul>
                        </div>
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0 auto', padding: 20, background: 'white' }}>
                        <div>
                            <Image
                                width={400}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuO3JklsJQdnWpofhmTg_Rb_HPl5I2S-FAQ&usqp=CAU"
                                preview={{
                                    src: 'https://mayruaxemay.vn/wp-content/uploads/2021/03/tran-duc-bo-meo-meo.jpg',
                                }}
                            />
                        </div>
                        <div style={{ display: 'block', width: '50% ' }}>
                            <h1 style={{ textAlign: 'center' }}>Alo l?? c?? ti???n</h1>
                            <ul>
                                <li> L??i su???t t???i thi???u t??? 18%/n??m - t???i ??a 38%/n??m t??nh tr??n d?? n??? gi???m d???n (??i???u kho???n v?? ??i???u ki???n ??p d???ng)</li>
                                <li> Kho???n vay l??n ?????n 12 l???n thu nh???p h??ng th??ng v?? t???i ??a 300 tri???u ?????ng, cho m???c ????ch ti??u d??ng, ph???c v??? ?????i s???ng</li>
                                <li> Th???i h???n vay t??? t???i thi???u 12 th??ng ?????n t???i ??a 48 th??ng</li>
                                <li>V?? d???: V???i kho???n vay t??n d???ng 60 tri???u ?????ng, th???i h???n vay 12 th??ng, l??i su???t 18%, h???ng th??ng b???n ch??? ph???i thanh to??n 5.500.800 ?????ng.    </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0 auto', padding: 20, background: 'white' }}>
                        <div>
                            <Image
                                width={400}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuO3JklsJQdnWpofhmTg_Rb_HPl5I2S-FAQ&usqp=CAU"
                                preview={{
                                    src: 'https://mayruaxemay.vn/wp-content/uploads/2021/03/tran-duc-bo-meo-meo.jpg',
                                }}
                            />
                        </div>
                        <div style={{ display: 'block', width: '50% ' }}>
                            <h1 style={{ textAlign: 'center' }}>Alo l?? c?? ti???n</h1>
                            <ul>
                                <li> L??i su???t t???i thi???u t??? 18%/n??m - t???i ??a 38%/n??m t??nh tr??n d?? n??? gi???m d???n (??i???u kho???n v?? ??i???u ki???n ??p d???ng)</li>
                                <li> Kho???n vay l??n ?????n 12 l???n thu nh???p h??ng th??ng v?? t???i ??a 300 tri???u ?????ng, cho m???c ????ch ti??u d??ng, ph???c v??? ?????i s???ng</li>
                                <li> Th???i h???n vay t??? t???i thi???u 12 th??ng ?????n t???i ??a 48 th??ng</li>
                                <li>V?? d???: V???i kho???n vay t??n d???ng 60 tri???u ?????ng, th???i h???n vay 12 th??ng, l??i su???t 18%, h???ng th??ng b???n ch??? ph???i thanh to??n 5.500.800 ?????ng.    </li>
                            </ul>
                        </div>
                    </div>

                </Content>
            </Layout>
            <Layout>
            </Layout>
        </Layout >
    )
}


export default LoginForm