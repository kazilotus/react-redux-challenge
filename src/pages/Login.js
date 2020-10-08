import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { Form, Input, message, Button, Checkbox } from 'antd'
import { Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { login } from '../redux/actions/auth'

import './Login.css'

export class Login extends Component {

    onFinish = (values) => {
        console.log(values)
        this.props.login(values)
    }

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    render() {

        if (this.props.user)
            return <Redirect to="/admin" />

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
                                // placeholder="Email"
                                placeholder="admin@admin.com"
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
                            // placeholder="Password"
                            placeholder="admin"
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
    products: state.products,
    user: state.auth?.user
})

const mapDispatchToProps = dispatch => ({
    login: (form) => dispatch(login(form))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
