import { Modal, Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import Pagination from "./Pagination";
import axios from "../axios";
import { setEployees } from "../redux/actions/generalActions";
import { useDispatch, useSelector } from "react-redux";
const EmployeeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/user")
      .then((response) => {
        console.log(response.data.data);
        dispatch(setEployees(response.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //const { sortedEmployees } = useContext(EmployeeContext); //Found
  const sortedEmployees = useSelector(
    (state) => state.setEmployeesReducers.employees
  );
  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert();
    };
  }, [sortedEmployees]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              <b>Employees</b>
            </h2>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Emlployee List Updated Succefully!
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Edited at</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentEmployees}
        sortedEmployees={sortedEmployees}
      />
    </>
  );
};

export default EmployeeList;
