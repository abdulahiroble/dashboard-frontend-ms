// ====   MODULS ====
import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';



// ==== OTHERS ====
// import ApiContext from '../services/ApiContext';
const { TextArea } = Input;

const ContactFormComponent = () => {
    const navigate = useNavigate();

    //   const onFinish = async (values) => {
    //     const sendRequet = await ApiContext.LoadRequestCollection.sendRequest(values);
    //     console.log(sendRequet)

    //     if (sendRequet?.data?.success) {
    //       alert("Thank you for your message")
    //       function handleClick() {
    //         navigate('/');
    //       }

    //       handleClick()
    //     }else{
    //       alert(sendRequet.data.msg)
    //     }
    //   };

    return (
        <Form
            className='form'
            name="Login"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{}}
            // onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="firstname"
                rules={[{ required: true, message: 'Firstname must be minimum 3 characters long', min: 3 }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Email must be minimum 3 characters long', min: 3 }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Text Message"
                name="msg"
                rules={[{ required: true, message: 'Text message must be minimum 3 characters long', min: 3 }]}
            >
                <TextArea rows={4} placeholder="Max 555 characters" maxLength={555} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default ContactFormComponent;
