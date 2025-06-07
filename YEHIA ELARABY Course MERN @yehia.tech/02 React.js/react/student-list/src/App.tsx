import { useState } from "react";
import { StudentTable } from "./components/StudentTable";
import { AddStudent } from "./components/AddStudent";
import { data } from "./utils/data";

function App() {
  const [students, setStudents] = useState(data); // const [first, second, third] = [0, 1, 2];

  return (
    <>
      <StudentTable students={students} />
      <AddStudent students={students} setStudents={setStudents} />
    </>
  );
}

export default App;
