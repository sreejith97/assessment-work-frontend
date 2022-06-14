import { useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import { useSelector } from "react-redux";

function App() {
  // let user = useSelector((state) => state.setEmployeesReducers.employees);
  // useEffect(() => {
  //   console.log(user);
  // }, []);

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeList />
        </div>
      </div>
    </div>
  );
}

export default App;
