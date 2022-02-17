import React, { useState } from 'react';
import { Button, TextField, Pagination, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

import './cadastroCargo.css';

const CadastroCargo = () => {
    const [page, setPage] = useState(1);

    const permissoes = {
        porPagina: 3,
        titulos: ['Cargos', 'Usuários', 'Categorias', 'Fornecedores', 'Produtos', 'Lotes', 'Clientes', 'Vendas', 'Compras', 'Relatórios'],
    };

    const qtdePaginas = Math.ceil(permissoes.titulos.length / permissoes.porPagina);

    const checkboxes = () => {
        const inicio = (page - 1) * permissoes.porPagina, gruposCheckbox = [];
        let indiceAtual = inicio;

        for(let i = 0; i < permissoes.porPagina; i++) {
            if(permissoes.titulos[indiceAtual]) {
                gruposCheckbox.push({
                    key: indiceAtual,
                    titulo: permissoes.titulos[indiceAtual]
                });
            }

            indiceAtual++;
        }

        return gruposCheckbox;
    };

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className='container'>
            <div className='title-container'>
                <h1>Cadastrar novo cargo</h1>
            </div>

            <form>
                <div className="input-text">
                    <TextField
                        id="cargo-input"
                        label="Cargo"
                        fullWidth
                        name="cargo"
                        margin="normal"
                        variant='standard'
                    />
                </div>

                <h3>Permissões</h3>
                <div className="permissoes-container">
                    { checkboxes().map(grupoCheckbox => (
                        <FormGroup key={grupoCheckbox.key} className='cargo-checkbox-group'>
                            <h2>{grupoCheckbox.titulo}</h2>
                            <FormControlLabel control={<Checkbox />} label="Todas as operações"/>
                            <FormControlLabel control={<Checkbox />} label="Cadastrar"/>
                            <FormControlLabel control={<Checkbox />} label="Visualizar"/>
                            <FormControlLabel control={<Checkbox />} label="Editar"/>
                            <FormControlLabel control={<Checkbox />} label="Excluir"/>
                        </FormGroup>
                    )) }
                </div>

                <Pagination className='paginacao' count={qtdePaginas} page={page} onChange={handleChange} />

                <div className="button-container">
                    <Button variant="outlined" type='button'>Cancelar</Button>
                    <Button variant="contained" color='success' type='submit'>Aplicar</Button>
                </div>
            </form>
        </div>
    );
}
 
export default CadastroCargo;
