import React from 'react';
import { Button, TextField, InputAdornment, Link } from '@mui/material';
import {
    Email as EmailIcon,
    LockOpen as LockOpenIcon,
    VpnKey as VpnKeyIcon
} from '@mui/icons-material';

import './login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className='title-container'>
                <LockOpenIcon fontSize='large' />
                <h1>Login</h1>
            </div>

            <form>
                <TextField
                    id='email-input'
                    name='email'
                    fullWidth
                    margin='normal'
                    placeholder='E-mail'
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

                <div className="button-container">
                    <Button fullWidth variant="contained" color='success' type='submit'>Entrar</Button>
                </div>
            </form>

            <div className='links-container'>
                <Link href='#' className='link' color='#000'>Esqueci a senha</Link>
                <Link href='#' className='link' color='#000'>Quero me cadastrar</Link>
            </div>
        </div>
    );
}

export default Login;
