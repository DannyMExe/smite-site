import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Container } from 'react-bootstrap';


const Signup = () => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(usernameRef.current.value, emailRef.current.value, passwordRef.current.value)

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('')
            setLoading(true);
            await signup(usernameRef.current.value, emailRef.current.value, passwordRef.current.value)
            navigate('/dashboard')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)

    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center bm-4">Sign Up</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                            <Form.Group id='username'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" ref={usernameRef} required />
                                </Form.Group>
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id='passord-confirm'>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have account? <Link to='/login'>Log In</Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Signup;
