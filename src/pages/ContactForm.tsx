// ====   MODULS ====
import React from 'react';
import { useState, useEffect } from 'react';
import { Affix, Col, Button, Checkbox, Form, Input } from 'antd';
// import '../Styles/Login.css';

// ==== COMPONENTS ====
import ContactFormComponent from '../components/ContactFormComponent';


export default function EventDetails() {
    const [initialData, setInitialData] = useState([]);

    console.log("INITIAL====", initialData)
    return (
        <Col>
            <Affix>
            </Affix>
            <Col className='Logincontainer' span={24}>
                <ContactFormComponent />
            </Col>
        </Col>
    )
}