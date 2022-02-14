import './redefinirSenha.css';

import React from 'react';
import { Button, TextField, InputAdornment } from '@mui/material';
import {
    Email as EmailIcon,
    ManageAccounts as ManageAccountsIcon
} from '@mui/icons-material';

const RedefinirSenha = () => {
    return (
        <div className='container'>
            <div className='title-container'>
                <ManageAccountsIcon className='title-icon' fontSize='large' />
                <h1>Redefinir Senha</h1>
            </div>

            <div className='text-container'>
                <h2>Esqueceu a sua senha?</h2>
                <p>Digite seu email no campo abaixo e receba um link para redefinir sua senha</p>
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

                <div className="button-container">
                    <Button fullWidth variant="contained" color='success' type='submit'>Enviar</Button>
                </div>
            </form>
        </div>
    );
}
 
export default RedefinirSenha;
