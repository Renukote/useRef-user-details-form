import "./App.css";

export const TableRow = ({
  name,
  age,
  department,
  salary,
  maritalStatus,
  address,
  profilePhoto,
}) => {
  // console.log("Table Row function is running with the data", name);
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{department}</td>
      <td>{salary}</td>
      <td>{maritalStatus}</td>
      <td>{address}</td>
      <td>{profilePhoto[1]}</td>
      {/* <td onClick={(e) => { e.target.parentNode.remove()}}>Delete</td>   */}
    </tr>
  );
};
