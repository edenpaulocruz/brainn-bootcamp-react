import styled from 'styled-components'
import Title from './title'

const CarForm = styled.form`
  width: 25%;
  height: 100vh;
  padding: 40px 20px 20px;
  background-color: #faecbe;
  position: fixed;
`

const InputDiv = styled.div`
  margin-bottom: 10px;
`

const InputField = styled.input`
  width: 100%;  
  padding: 5px;
  font-size: 1rem;
`

const Button = styled.button`
  width: 100%;  
  padding: 5px;
  font-size: 1rem;
  background-color: #407be9;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: #244687;
  }
`

function Form({ handleSubmit }) {
  return (
    <CarForm onSubmit={handleSubmit}>
      <Title>Formulário de Cadastro</Title>
      <InputDiv>
        <InputField type='url' placeholder='URL para foto do carro' name='image' autoFocus />
      </InputDiv>
      
      <InputDiv>
        <InputField type='text' placeholder='Marca / Modelo' name='brandModel' />
      </InputDiv>
      
      <InputDiv>
        <InputField type='number' placeholder='Ano' name='year' />
      </InputDiv>
      
      <InputDiv>
        <InputField type='text' placeholder='Placa' name='plate' />
      </InputDiv>
      
      <InputDiv>
        <InputField type='text' placeholder='Cor do carro' name='color' />
      </InputDiv>
      
      <Button>Cadastrar</Button>
    </CarForm>
  )
}

export default Form
