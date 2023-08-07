/* eslint-disable no-unused-vars */
import Banner from './components/Banner'
import Form from './components/Form'
import { useState } from 'react'
import Time from './components/Time'

function App () {

  const times = [
    {
      nome: 'gremio',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'inter',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'juventude',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'caxias',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'pelotas',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Palmeiras',
      corPrimaria: '#DDBA05',
      corSecundaria: 'FFF5D9',
    },
    {
      nome: 'Flamengo',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  function aoNovoColaboradorAdicionado (colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />
      <Form
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        value={colaboradores}
      />
      <Time 
        nome={'Gremio'}
      />
       <Time 
        nome={'Inter'}
      />
       <Time 
        nome={'Juventude'}
      />
       <Time 
        nome={'Caxias'}
      />
       <Time 
        nome={'Pelotas'}
      />
       <Time 
        nome={'Palmeiras'}
      />
       <Time 
        nome={'flamengo'}
      />
    </>
  )
}

export default App
