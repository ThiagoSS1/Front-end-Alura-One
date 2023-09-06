import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';


function FormCadastro ({aoEnviar}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [CPF, setCPF] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({CPF:{valido:true, texto:''}});

  const handleCpfBlur = () => {
    if (CPF.length !== 11) {
      setErros({
        CPF: {
          valido: false,
          texto: "CPF deve ter 11 dígitos"
        }
      });
    } else {
      setErros({
        CPF: {
          valido: true,
          texto: ""
        }
      });
    }
  }


  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({nome, sobrenome, CPF, promocoes, novidades});
    }}>

      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin='normal'
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id='sobrenome'
        label="Sobre Nome"
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <TextField
        value={CPF}
        onChange={(event) => {
          setCPF(event.target.value)
        }}
        onBlur={handleCpfBlur}
        error={!erros.CPF.valido}
        helperText={erros.CPF.texto}
        id='CPF'
        label="CPF"
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <FormControlLabel
        value={promocoes}
        label='Promoções'
        control={<Switch checked={promocoes} onChange={(event)=> {
          setPromocoes(event.target.checked)
        }} name='promocoes'  color='primary' />}
      />

      <FormControlLabel
        value={novidades}
        label='Novidades'
        control={<Switch checked={novidades} onChange={(event)=> {
          setNovidades(event.target.checked)
        }} name='novidades'  color='primary' />}
      />

      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Cadastrar
      </Button>

    </form>
  )
}

export default FormCadastro;