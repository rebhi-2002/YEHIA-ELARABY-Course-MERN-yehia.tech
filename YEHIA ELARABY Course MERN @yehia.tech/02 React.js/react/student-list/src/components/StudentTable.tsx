import { useEffect, useMemo } from "react";
import { data, type Student } from "../utils/data";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Props {
  students: Student[];
  checkMaxLimit: boolean;
}

export const StudentTable = ({ students, checkMaxLimit }: Props) => {
  useEffect(() => {
    console.log("Call in useEffect");
    if (students.length === 5 && checkMaxLimit) {
      alert("Max limit reached");
    }
    // Fetch user Data from api
  }, [students, checkMaxLimit]); // Dependency On: state, props

  const studentsWithScholarship = useMemo(() => {
    return students.map((s) => {
      let result = false;
      for (let i = 0; i <= 10000000; i++) {
        result = Math.random() > 0.5;
      }
      return {
        ...s,
        eligible: result,
      };
    });
  }, []);

  return (
    <TableContainer component={Paper} sx={{ width: 400 }}>
      {/* <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.class}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      {/* <Table size="small" sx={{ border: 2, background: "#197424" }}> */}
      <Table size="small" sx={{ border: 2 }}>
        <TableHead>
          <TableRow>
            {/* <TableCell sx={{ color: "blue" }}>Full Name</TableCell> */}
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
            {/* <TableCell>Year</TableCell> */}
            <TableCell>Scholarship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((item) => { */}
          {students.map((item, index) => {
            {
              /* {studentsWithScholarship.map((item) => { */
            }
            return (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.class}</TableCell>
                {/* <TableCell>{item.year}</TableCell> */}
                {/* <TableCell>{item.eligible ? "Yes" : "No"}</TableCell> */}
                <TableCell>
                  {studentsWithScholarship[index]?.eligible ? "Yes" : "No"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
