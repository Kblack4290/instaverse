import {React, useState, useEffect } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';
import { LockOutlined } from '@material-ui/icons';
import Input from './Input.js';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import CustomSnackbar from '../Snackbar/Snackbar.js';
import * as api from '../../api';
import debounce from 'lodash/debounce';

const InitialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(InitialState);
    const [isSignUp, setIsSignUp] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            if (formData.password !== formData.confirmPassword) {
                handleSnackbar("Passwords do not match");
                return;
            }
            dispatch(signup(formData, navigate, handleSnackbar));
        } else {
            dispatch(signin(formData, navigate, handleSnackbar));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    const handleSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setSnackbarMessage('');
    };

    const checkEmailExists = debounce(async (email) => {
        try {
            const { data } = await api.checkEmail({ email });
            if (data.exists) {
                handleSnackbar("User already exists");
            }
        } catch (error) {
            console.log(error);
        }
    }, 500);

    useEffect(() => {
        if (isSignUp && formData.email) {
            checkEmailExists(formData.email);
        }
    }, [formData.email, isSignUp, checkEmailExists]);

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Button onClick={switchMode}>
                            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
            <CustomSnackbar open={snackbarOpen} message={snackbarMessage} handleClose={handleSnackbarClose} />
        </Container>
    );
};

export default Auth;