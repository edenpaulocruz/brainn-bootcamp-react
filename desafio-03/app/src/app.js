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

  return (
    <div className='app'>
      <Form />
      <Table cars={cars} />
    </div>
  )
}

export default App
