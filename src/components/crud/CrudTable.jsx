

const CrudTable = ({ equipos }) => {
  return (
    <>
      <h3>Equipos actuales</h3>
      <table border='1'>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>País</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {equipos.length === 0 ? (
            <tr>
              <td colSpan="4">No hay datos</td>
            </tr>
          ) : (
            equipos.map((equipo, index) => {
              return (
                <tr key={index}>
                  <td>{equipo.id}</td>
                  <td>{equipo.equipo}</td>
                  <td>{equipo.pais}</td>
                  <td>
                    <button className='btn btn-warning m-1'>Editar</button>
                    <button className='btn btn-danger m-1'>Eliminar</button>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </>
  )
}

export default CrudTable