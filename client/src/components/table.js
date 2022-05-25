function Table(props) {
  return (
    <table>
      <thead>
        {Object.keys(props.data[1]).map((element) => (
          <th>{element}</th>
        ))}
      </thead>
      <tbody>
        {props.data.map((row, index) => (
          <tr key={index}>asdfsf</tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
