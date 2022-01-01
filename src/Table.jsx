import { TableRow } from "./TableItem";
import "./App.css";

export const Table = (data) => {
  console.log("Table function is running with data", data);

  let TRdata = [];

  for (let key in data) {
    TRdata = [...TRdata, data[key]];
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>age</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Marital Status</th>
          <th>address</th>
          <th>Profile Photo</th>
        </tr>
      </thead>

      <tbody>
        {TRdata.map((e,i ) => (
          <TableRow key = {i} {...e}  />
        ))}
      </tbody>
    </table>
  );
};
