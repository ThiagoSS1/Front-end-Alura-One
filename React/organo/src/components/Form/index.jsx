/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from '../Button'
import Input from '../Input'
import List from '../List'
import styles from './Form.module.css'
import { useState } from 'react'

function Form (props) {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [image, setImage] = useState('')
  const [time, setTimes] = useState('')
  // const [cardCriado, setCardCriado] = useState(false)

  const times = [
    'gremio',
    'inter',
    'juventude',
    'caxias',
    'pelotas',
    'Palmeiras',
    'Flamengo'
  ]

  function aoSalvar (evento) {
    evento.preventDefault()
    console.log('Salvando...', nome, cargo, image, time)
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      image,
      time
    })
  }


  return (
    <section className={styles.form}>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados pra criar o card do colaborador</h2>
        <Input
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          aoAlterado={val => setNome(val)}
        />
        <Input
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={cargo}
          aoAlterado={val => setCargo(val)}
        />
        <Input
          label="Imagem"
          value={image}
          placeholder="Digite a URL da sua imagem"
          aoAlterado={val => setImage(val)}
        />
        <List
          obrigatorio={true}
          itens={times}
          label="Times: "
          valor={time}
          aoAlterado={val => setTimes(val)}
        />
        <Button >
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form