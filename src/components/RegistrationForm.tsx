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
        sm: { span: 8 },
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
        <>
            <Col className='Registercontainer'></Col>
            <Form
                {...formItemLayout}
                name="register"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                // onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="firstname"
                    label="First name"
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
        </>
    );
};

export default RegistrationForm;