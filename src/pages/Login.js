import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { Form, Input, message, Button, Checkbox } from 'antd'
import { Row, Col } from 'antd'
import { notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './Login.css'

export class Login extends Component {

    render() {
        return (
            <section className="login">

                <Row justify="center" align="middle">
                    <Col span={24}>
                        <Form
                            name="basic"
                            initialValues={{ remember: true, ...this.state }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            style={{ maxWidth: 300, margin: 'auto' }}
                        >
                        <Form.Item
                            name="email"
                            rules={[
                            { required: true, message: 'Please enter your email!' },
                            {
                                type: 'email',
                                message: 'Please input a valid email!',
                            },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Email"
                                onChange={(e) => {
                                    this.setState({ email: e.target.value })
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password!' }]}
                        >
                            <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Link style={{ float: 'right' }} to="#" onClick={ () => message.info('It\'s a mock site.') }>
                                Forgot password
                            </Link>
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 20 }}>
                            <Button
                                loading={this.props.loading}
                                htmlType="submit"
                                style={{ cursor: 'pointer' }}
                                block
                            >
                                Log in
                            </Button>
                        </Form.Item>

                        </Form>
                    </Col>
                </Row>
                    
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
