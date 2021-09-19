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
                            <h1 style={{ textAlign: 'center' }}>Alo là có tiền</h1>
                            <ul>
                                <li> Lãi suất tối thiểu từ 18%/năm - tối đa 38%/năm tính trên dư nợ giảm dần (Điều khoản và Điều kiện áp dụng)</li>
                                <li> Khoản vay lên đến 12 lần thu nhập hàng tháng và tối đa 300 triệu đồng, cho mục đích tiêu dùng, phục vụ đời sống</li>
                                <li> Thời hạn vay từ tối thiểu 12 tháng đến tối đa 48 tháng</li>
                                <li>Ví dụ: Với khoản vay tín dụng 60 triệu đồng, thời hạn vay 12 tháng, lãi suất 18%, hằng tháng bạn chỉ phải thanh toán 5.500.800 đồng.    </li>
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
                            <h1 style={{ textAlign: 'center' }}>Alo là có tiền</h1>
                            <ul>
                                <li> Lãi suất tối thiểu từ 18%/năm - tối đa 38%/năm tính trên dư nợ giảm dần (Điều khoản và Điều kiện áp dụng)</li>
                                <li> Khoản vay lên đến 12 lần thu nhập hàng tháng và tối đa 300 triệu đồng, cho mục đích tiêu dùng, phục vụ đời sống</li>
                                <li> Thời hạn vay từ tối thiểu 12 tháng đến tối đa 48 tháng</li>
                                <li>Ví dụ: Với khoản vay tín dụng 60 triệu đồng, thời hạn vay 12 tháng, lãi suất 18%, hằng tháng bạn chỉ phải thanh toán 5.500.800 đồng.    </li>
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
                            <h1 style={{ textAlign: 'center' }}>Alo là có tiền</h1>
                            <ul>
                                <li> Lãi suất tối thiểu từ 18%/năm - tối đa 38%/năm tính trên dư nợ giảm dần (Điều khoản và Điều kiện áp dụng)</li>
                                <li> Khoản vay lên đến 12 lần thu nhập hàng tháng và tối đa 300 triệu đồng, cho mục đích tiêu dùng, phục vụ đời sống</li>
                                <li> Thời hạn vay từ tối thiểu 12 tháng đến tối đa 48 tháng</li>
                                <li>Ví dụ: Với khoản vay tín dụng 60 triệu đồng, thời hạn vay 12 tháng, lãi suất 18%, hằng tháng bạn chỉ phải thanh toán 5.500.800 đồng.    </li>
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