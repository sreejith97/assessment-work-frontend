import { useState, useEffect } from "react";

const Employee = ({ employee }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.user_name}</td>
      <td>{employee.email}</td>
      <td>{employee.created_at}</td>
      <td>{employee.edited_at}</td>
    </>
  );
};

export default Employee;
