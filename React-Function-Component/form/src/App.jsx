import './App.css'
import FormCadastro from './components/FormCadastro'

import {Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

function App() {

  function aoEnviarForm(dados) {
      console.log(dados)
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component='h1' align='center' >Formulário de cadastro</Typography>
      <FormCadastro aoEnviar={aoEnviarForm} />
    </Container>
  )
}

export default App
