function Table({ cars }) {
  return (
    <div className='car-list'>
      <h2 className='car-title'>Relação de veículos</h2>
      <table className='car-table'>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Marca / Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Cor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => {
            return (
              <tr key={car.plate}>
                <td><img src={car.image} alt={car.brandModel} /></td>
                <td>{car.brandModel}</td>
                <td>{car.year}</td>
                <td>{car.plate}</td>
                <td>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: car.color
                  }} />
                </td>
                <td><button>Excluir</button></td>
              </tr>
            )
          })}

          {!!(cars.length === 0) && <NoCarsMessage />}
        </tbody>
      </table>
    </div>
  )
}

function NoCarsMessage() {
  return (
    <tr>
      <td colSpan='6'>Nenhum carro cadastrado</td>
    </tr>
  )
}

export default Table
