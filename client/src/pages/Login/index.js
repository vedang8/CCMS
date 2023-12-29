import React from 'react'
import {Link} from 'react-router-dom';
import {Form, Input, Button} from 'antd'
import Divider from "../../components/Divider";

const rules=[
  {
    required: true,
    message: 'required'
  },
];

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className='h-screen bg-primary flex justify-center items-center'>
      <div className='bg-white p-5 rounded w-[462px]'>
        <h1>
          CARBON CREDIT SYSTEM <spam className="text-primary"></spam>
        </h1>
        <Divider />
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label='Email'name='email' rules={rules}>
            <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label='Password'name='password' rules={rules}>
            <Input type="password" placeholder='Password'/>
          </Form.Item>
          <Button type="primary" htmlType="submit" block classname="mt-2">
            Login
          </Button>
          <div className="mt-5 text-center">
            <span className="text-gray-500">
              Don't have an account? <Link to="/register" className="text-primary">Register</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login