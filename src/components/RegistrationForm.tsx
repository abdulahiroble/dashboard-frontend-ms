import React from 'react';
import {
    Button,
    Col,
    Form,
    Input,
    Select,
} from 'antd';
// import LoadUserCollection from '../services/collections/LoadUserCollection';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();

    // const onFinish = async (values) => {
    //     console.log('Received values of form: ', values);
    //     const result = await LoadUserCollection.registerUser(values)

    //     if(result.data.success){
    //         alert("Thank you for creating your registration, please check your email")
    //     }
    // };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="45">+45</Option>
                <Option value="87">+87</Option>
                <Option value="86">+86</Option>
                <Option value="61">+61</Option>
                <Option value="64">+64</Option>
                <Option value="1">+1</Option>
                <Option value="7">+7</Option>
                <Option value="81">+81</Option>
                <Option value="82">+82</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh', flexDirection: 'column', }}>
            <div>
                <img alt="logo" src="/point-logo.svg" style={{
                    // width: "100%",
                    marginBottom: "30px",
                    marginLeft: "120px",
                }} />
            </div>
            <div>

                <Form
                    {...formItemLayout}
                    name="register"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 10 }}
                    // onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="firstname"
                        label="First name"
                        wrapperCol={{ offset: 0, span: 40 }}
                        rules={[
                            {
                                type: 'string',
                                message: 'The input is not valid',
                                min: 3,
                                max: 50,
                            },
                            {
                                required: true,
                                message: 'Name must be at least 3 characters long',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="lastname"
                        label="Last name"
                        wrapperCol={{ offset: 0, span: 40 }}
                        rules={[
                            {
                                type: 'string',
                                message: 'The input is not valid',
                                min: 3,
                                max: 50,
                            },
                            {
                                required: true,
                                message: 'Name must be at least 3 characters long',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        wrapperCol={{ offset: 0, span: 40 }}
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Address"
                        wrapperCol={{ offset: 0, span: 40 }}
                        rules={[
                            {
                                type: 'string',
                                message: 'The input is not valid',
                                min: 3,
                                max: 50,
                            },
                            {
                                required: true,
                                message: 'Name must be at least 3 characters long',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="postal"
                        label="Postal code"
                        wrapperCol={{ offset: 0, span: 40 }}
                        rules={[
                            {
                                message: 'The input is not valid',
                                min: 3,
                                max: 4,
                            },
                            {
                                required: true,
                                message: 'Postal code must be at least 3 characters long',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        wrapperCol={{ offset: 0, span: 40 }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        wrapperCol={{ offset: 0, span: 40 }}
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        wrapperCol={{ offset: 0, span: 40 }}
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RegistrationForm;