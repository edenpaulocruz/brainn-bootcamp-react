function Form({ handleSubmit }) {
  return (
    <form className='car-form' onSubmit={handleSubmit}>
      <h2 className='car-title'>Formulário de Cadastro</h2>
      <div className='input'>
        <input className='input-field' type='url' placeholder='URL para foto do carro' name='image' autoFocus />
      </div>
      
      <div className='input'>
        <input className='input-field' type='text' placeholder='Marca / Modelo' name='brandModel' />
      </div>
      
      <div className='input'>
        <input className='input-field' type='number' placeholder='Ano' name='year' />
      </div>
      
      <div className='input'>
        <input className='input-field' type='text' placeholder='Placa' name='plate' />
      </div>
      
      <div className='input'>
        <input className='input-field' type='text' placeholder='Cor do carro' name='color' />
      </div>
      
      <button className='car-form-button' type="submit">Cadastrar</button>
    </form>
  )
}

export default Form
