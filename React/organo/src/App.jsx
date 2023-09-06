/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Banner from './components/Banner'
import Form from './components/Form'
import { useState } from 'react'
import Time from './components/Time'
import Colaborador from './components/Colaborador'
import Rodape from './components/Rodape'

function App () {

  const times = [
    {
      nome: 'gremio',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
      colaboradores: []
    },
    {
      nome: 'inter',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
      colaboradores: []
    },
    {
      nome: 'juventude',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
      colaboradores: []
    },
    {
      nome: 'caxias',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
      colaboradores: []
    },
    {
      nome: 'pelotas',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
      colaboradores: []
    },
    {
      nome: 'Palmeiras',
      corPrimaria: '#DDBA05',
      corSecundaria: 'FFF5D9',
      colaboradores: []
    },
    {
      nome: 'Flamengo',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
      colaboradores: []
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
        times={times.map(times => times.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        value={colaboradores}
      />

      {times.map(time => <Time
        nome={time.nome}
        key={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </>
  )
}

export default App
