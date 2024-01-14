// ====   MODULS ====
import React from 'react';
import { Affix, Col, Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

// ==== OTHERS ====
import LoadUserCollection from '../services/collections/LoadUserCollection';

const Login = () => {
    const navigate = useNavigate();


    const onFinish = async (values: any) => {
        const result = await LoadUserCollection.authenticateUser(values) as any

        console.log("RESULT", result)

        if (result === "Unauthorized") {
            alert(result)
        } else if (result.data.isActive === false) {
            alert("User not activated")
            return false;
        } else if (result.data.validPassword) {
            localStorage.setItem('token', result.data.generatedToken);
            localStorage.setItem('userId', result.data.userId);

            alert("Success")
            navigate("/")
            // CHECK IF ERROR
        }


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                flexDirection: 'column',
            }
        }>
            <div>
                <img alt="logo" src="/point-logo.svg" style={{
                    marginLeft: "50px",
                    marginBottom: "30px",
                }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col>
                    <Col className='Logincontainer' span={40}>
                        <Form
                            className='form'
                            name="Login"
                            labelCol={{ span: 40 }}
                            wrapperCol={{ span: 40 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                                wrapperCol={{ offset: 2, span: 40 }}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                                wrapperCol={{ offset: 0, span: 40 }}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 40 }}>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 0, span: 40 }}>
                                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Col>
            </div>
        </div>
    );
};

export default Login;