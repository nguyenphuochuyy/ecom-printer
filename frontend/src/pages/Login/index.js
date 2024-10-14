
import { Breadcrumb, Button, Checkbox, Form, Input, } from "antd"
import "./Login.scss"
import { useEffect, useState } from "react"
const Login = () => {
    const [isUserLogin, setIsUserLogin] = useState(true);

    return (    
        <>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: 'My Account',
                    },
                ]}
            />
            {isUserLogin ? (<>
                <h2 className="form__title">LOGIN</h2>
                <Form 
                    className="form"
                    name="login"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Login
                        </Button>
                    </Form.Item>

                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <p>If you don't have account <a href="#"  onClick={(e)=>{ e.preventDefault(); setIsUserLogin(!isUserLogin)}} >Register</a> </p>
                    </Form.Item>
                </Form>
                
            </>) : (<>
                <h2 className="form__title">REGISTER</h2>
                <Form
                    className="form"
                    name="login"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email address"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: 'purple' }}>
                            Register
                        </Button>
                    </Form.Item>
                    <Form.Item
                        className="submit"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <p>If you have account <a href="#" onClick={(e) => {e.preventDefault(); setIsUserLogin(!isUserLogin) }}>Sign In</a> </p>
                    </Form.Item>
                </Form>
            </>)}




        </>


    )
}
export default Login