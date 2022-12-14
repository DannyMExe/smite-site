import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Container } from 'react-bootstrap';


const UpdateProfile = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { runUpdatePassword, runUpdateEmail, sign } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const currentUser = sign.auth;

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        const promises = []
        setLoading(true);
        setError('');
        if (emailRef.current.value !== currentUser.email) {
            promises.push(runUpdateEmail(currentUser, emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(runUpdatePassword(currentUser, passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate('/dashboard')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })



    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center bm-4">Update Profile</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} placeholder='Leave blank to keep the same password' />
                                </Form.Group>
                                <Form.Group id='passord-confirm'>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder='Leave blank to keep the same password' />
                                </Form.Group>
                                <Button disabled={true} className="w-100" type="submit">Update (Currently Unavailable)</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        <Link to='/'>Cancel</Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default UpdateProfile;
