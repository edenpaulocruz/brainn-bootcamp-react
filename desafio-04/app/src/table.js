import styled from 'styled-components'
import Title from './title'

const CarList = styled.div`
  width: 75%;
  margin-left: 25%;
  padding: 40px 20px 20px;
`

const CarTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`

const Tr = styled.tr`
  th, td {
    padding: 1rem;
    border: 1px solid #000;
  }
`

function Table({ cars, handleDelete }) {
  return (
    <CarList>
      <Title>Relação de veículos</Title>
      <CarTable>
        <thead>
          <Tr>
            <th>Foto</th>
            <th>Marca / Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Cor</th>
            <th></th>
          </Tr>
        </thead>
        <tbody>
          {cars.map(car => {
            return (
              <Tr key={car.plate}>
                <td><img src={car.image} alt={car.brandModel} /></td>
                <td>{car.brandModel}</td>
                <td>{car.year}</td>
                <td>{car.plate}</td>
                <td>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: car.color,
                    border: '1px solid #000'
                  }} />
                </td>
                <td>
                  <button onClick={() => handleDelete(car.plate)}>Excluir</button>
                </td>
              </Tr>
            )
          })}

          {!!(cars.length === 0) && <NoCarsMessage />}
        </tbody>
      </CarTable>
    </CarList>
  )
}

function NoCarsMessage() {
  return (
    <Tr>
      <td colSpan='6'>Nenhum carro cadastrado</td>
    </Tr>
  )
}

export default Table
