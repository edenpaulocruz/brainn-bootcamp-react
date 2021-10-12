import { useState, useEffect } from 'react'
import { get, post, del } from './http'
import { createGlobalStyle } from 'styled-components'
import Form from './form'
import Table from './table'
import { ErrorMessage } from './messages'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }  

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .app {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

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
      <GlobalStyle />
      {errorMessage !== null && (
        <ErrorMessage message={errorMessage} />
      )}
      <Form handleSubmit={handleSubmit} />
      <Table cars={cars} handleDelete={handleDelete} />
    </div>
  )
}

export default App
