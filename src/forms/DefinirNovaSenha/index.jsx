import './definirNovaSenha.css';

import React from 'react';
import { Button, TextField, InputAdornment } from '@mui/material';
import {
    VpnKey as VpnKeyIcon,
    ManageAccounts as ManageAccountsIcon
} from '@mui/icons-material';

const DefinirNovaSenha = () => {
    return (
        <div className='container'>
            <div className='title-container'>
                <ManageAccountsIcon className='title-icon' fontSize='large' />
                <h1>Redefinir Senha</h1>
            </div>

            <div className='text-container'>
                <h2>Insira abaixo sua nova senha</h2>
            </div>

            <form>
                <TextField
                    id='senha-input'
                    name='senha'
                    fullWidth
                    margin='normal'
                    placeholder='Nova senha'
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

                <TextField
                    id='senha-input'
                    name='senha'
                    fullWidth
                    margin='normal'
                    placeholder='Confirmar nova senha'
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
                    <Button fullWidth variant="contained" color='success' type='submit'>Enviar</Button>
                </div>
            </form>
        </div>
    );
}
 
export default DefinirNovaSenha;
