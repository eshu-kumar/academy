export default function LocationTable({ data, type }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">
          {type === 'county' ? 'Country Data' : 'City Data'}
        </h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.populationFormatted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  