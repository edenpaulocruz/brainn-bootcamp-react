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

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const getElement = getFormElement(event)
    const image = getElement('image')
    
    const data = {
      image: getElement('image').value,
      brandModel: getElement('brandModel').value,
      year: getElement('year').value,
      plate: getElement('plate').value,
      color: getElement('color').value
    }

    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(result => result.json())

    setCars(cars => cars.concat(data))
    event.target.reset()
    image.focus()
  }

  return (
    <div className='app'>
      <Form handleSubmit={handleSubmit} />
      <Table cars={cars} />
    </div>
  )
}

export default App
