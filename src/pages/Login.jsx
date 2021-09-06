import { Avatar, Button, Container, Grid, TextField, Typography, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { AuthContext } from '../context/conIndex';
//import MyButton from '../UI/myButton/myButton';


const Login = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = (e) => {

        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();

    return (
        <Container className={classes.paper} maxWidth="sm">


            <Typography component="h1" variant="h5">
                Sign in
            </Typography>


            <form onSubmit={login} className={classes.form}>

                <TextField fullWidth label="Email" name="email" size="small" variant="outlined" />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                    margin='normal'
                    
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="teal"
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </form>
        </Container>
    );
};

export default Login;