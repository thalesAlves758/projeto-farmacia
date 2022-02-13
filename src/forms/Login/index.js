import './login.css';

import React from 'react';
import { Box, Button, TextField, InputAdornment, Link } from '@mui/material';
import {
    Email as EmailIcon,
    LockOpen as LockOpenIcon,
    VpnKey as VpnKeyIcon
} from '@mui/icons-material';

const Login = () => {
    const boxStyle = {
        bgcolor: '#b3dec4',
        padding: '20px',
        width: '25vw',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const buttonStyle = {
        margin: '10px 0'
    };

    return (
        <Box component="form" sx={boxStyle}>
            <div className='title-container'>
                <LockOpenIcon fontSize='large' />
                <h1>Login</h1>
            </div>

            <TextField
                id='email-input'
                name='email'
                fullWidth
                margin='normal'
                placeholder='Email'
                type="email"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    ),
                }}
                variant='standard'
            />

            <TextField
                id='senha-input'
                name='senha'
                fullWidth
                margin='normal'
                placeholder='Senha'
                type="password"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <VpnKeyIcon />
                        </InputAdornment>
                    ),
                }}
                variant='standard'
            />

            <Button fullWidth sx={buttonStyle} variant="contained" color='success' type='submit'>Entrar</Button>

            <div className='links-container'>
                <Link href='#' className='link' color='#000'>Esqueci a senha</Link>
                <Link href='#' className='link' color='#000'>Quero me cadastrar</Link>
            </div>
        </Box>
    );
}

export default Login;
