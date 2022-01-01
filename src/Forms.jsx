import { useState, useRef } from "react";
import { Table } from "./Table";
import { nanoid } from "nanoid";

export const Form = () => {
  const [Data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const submitRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    department: "",
    salary: "",
    maritalStatus: "",
    profilePhoto: "",
    address: "",
    id: nanoid(7),
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "profilePhoto") value = [submitRef.current.files[0], submitRef.current.files[0].name]

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setData([...Data, formData]);
  };

  const filterDep = () => {
    let filter = Data.filter((e) => {
      if (e.department === filterBy) return true;
      else return false;
    });

    setData(filter);
  };

  const sortBySal = () => {
    let sorted = Data.sort((a, b) => {
      return b.salary - a.salary;
    });

    setData(sorted);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input type="text" name="name" onChange={handleChange} />
        <br />

        <label>Age </label>
        <input type="Number" name="age" onChange={handleChange} />
        <br />

        <label>Department </label>
        <select name="department" onChange={handleChange}>
          <option value="HR">HR</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
        </select>
        <br />

        <label>Address </label>
        <input type="text" name="address" onChange={handleChange} />
        <br />

        <label>Salary </label>
        <input type="Number" name="salary" onChange={handleChange} />
        <br />

        <label>Married </label>
        <input type="checkbox" name="maritalStatus" onChange={handleChange} />
        <br />

        <label>Profile Photo </label>
        <input
          type="file"
          name="profilePhoto"
          onChange={handleChange}
          ref={submitRef}
        />
        <br />

        <input type="submit" value="submit" onChange={handleChange} />
        <br />

        {formData.profilePhoto ? (
          <img
            src={URL.createObjectURL(formData.profilePhoto[0])}
            alt="Uploaded"
          />
        ) : null}
      </form>

      {submitted ? (
        <>
          <Table {...Data} key={Data.id} />

          <select
            onClick={(e) => {
              setFilterBy(e.target.value);
            }}
          >
            <option value="HR">HR</option>
            <option value="marketing">marketing</option>
            <option value="sales">sales</option>
          </select>

          <button onClick={filterDep}>Filter by Department</button>
          <button onClick={sortBySal}>Sort By Salary</button>
        </>
      ) : (
        null
      )}
    </>
  );
};
