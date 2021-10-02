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

  const getFormElement = event => elementName => {
    return event.target.elements[elementName]
  }

  const handleSubmit = event => {
    event.preventDefault()
    
    const getElement = getFormElement(event)
    
    const data = {
      image: getElement('image').value,
      brandModel: getElement('brandModel').value,
      year: getElement('year').value,
      plate: getElement('plate').value,
      color: getElement('color').value
    }
    console.log(data)
  }

  return (
    <div className='app'>
      <Form handleSubmit={handleSubmit} />
      <Table cars={cars} />
    </div>
  )
}

export default App
