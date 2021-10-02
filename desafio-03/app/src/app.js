import { useState, useEffect } from 'react'
import Form from './form'
import Table from './table'
import './app.css'

const url = 'http://localhost:3333/cars'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch(url)
    .then(result => result.json())
    .then(result => setCars(result))
  }, []);

  const handleSubmit = event => {
    event.preventDefault()

    console.log('Clicou para cadastrar')
  }

  return (
    <div className='app'>
      <Form handleSubmit={handleSubmit} />
      <Table cars={cars} />
    </div>
  )
}

export default App
