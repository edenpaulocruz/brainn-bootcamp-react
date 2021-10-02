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
