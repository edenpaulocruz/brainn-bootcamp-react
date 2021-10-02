import { useState, useEffect } from 'react'
import Form from './form'
import Table from './table'
import './app.css'

const url = 'http://localhost:3333/cars'

function App() {
  const [cars, setCars] = useState([
    {
      image: 'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202108/20210820/volkswagen-gol-1.6-msi-totalflex-comfortline-4p-manual-wmimagem15205592086.jpg?s=fill&w=249&h=186&q=70',
      brandModel: 'Volkwagen / Gol',
      year: 2016,
      plate: 'AAA-0000',
      color: '#f00'
    },
  ])

  console.log(cars)

  return (
    <div className='app'>
      <Form />
      <Table cars={cars} />
    </div>
  )
}

export default App
