import { useState, useEffect } from 'react'
import { get, post, del } from './http'
import Form from './form'
import Table from './table'
import { ErrorMessage } from './messages'
import './app.css'

const url = 'http://localhost:3333/cars'

function App() {
  const [cars, setCars] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    get(url).then(result => {
      if (result.error) {
        setErrorMessage(result.message)
        return
      }

      setCars(result)
    })
  }, []);

  useEffect(() => {
    let timer

    if (errorMessage !== null) {
      timer = setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

    return () => clearTimeout(timer)
  }, [errorMessage])

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

    const result = await post(url, data)

    if (result.error) {
      setErrorMessage(result.message)
      return
    }

    setCars(cars => cars.concat(data))
    event.target.reset()
    image.focus()
  }

  const handleDelete = async (plate) => {
    const result = await del(url, { plate })

    if (result.error) {
      setErrorMessage(result.message)
      return
    }

    setCars(cars => cars.filter(car => car.plate !== plate))
  }

  return (
    <div className='app'>
      {errorMessage !== null && (
        <ErrorMessage message={errorMessage} />
      )}
      <Form handleSubmit={handleSubmit} />
      <Table cars={cars} handleDelete={handleDelete} />
    </div>
  )
}

export default App
