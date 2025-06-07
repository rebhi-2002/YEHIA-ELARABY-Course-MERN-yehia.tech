import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Button, Paper, TextField } from "@mui/material";
import { data, type Student } from "../utils/data";

interface Props {
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>>;
}

const initialState = {
  id: 999,
  fullName: "",
  age: "",
  email: "",
  class: "",
  year: "",
};

export const AddStudent = ({ students, setStudents }: Props) => {
  // let formData = {
  //   id: 999,
  //   name: "",
  //   age: 0,
  //   email: "",
  //   class: "",
  // };

  const [formData, setFormData] = useState(initialState);

  const [formError, setFormError] = useState({
    fullName: false,
    age: false,
    email: false,
    class: false,
    year: false,
  });

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const classRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   formData.name = e.target.value;
  // };

  // const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   formData.age = parseInt(e.target.value); // parseInt || Number || +
  // };

  // const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   formData.email = e.target.value;
  // };

  // const handleClassChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   formData.class = e.target.value;
  // };

  const handleSubmit = () => {
    // console.log("Submit");
    // data.push({
    //   id: data.length + 1,
    //   name: formData.name,
    //   age: Number(formData.age),
    //   email: formData.email,
    //   class: formData.class,
    // });

    // console.log(formData);
    // data.push(formData);
    // console.log(data);

    // // if (formData.name.trim().length === 0) return;
    // if (formData.fullName.trim().length === 0) return;
    // // if (formData.age === 0) return;
    // if (formData.email.trim().length === 0) return;
    // if (formData.class.trim().length === 0) return;

    const error = {
      fullName: formData.fullName.trim().length < 3,
      age: formData.age.trim().length === 0,
      email:
        formData.email.trim().length === 0 ||
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email),
      class: formData.class.trim().length === 0,
      year: formData.year.trim().length === 0 || !/^\d{4}$/.test(formData.year),
    };
    setFormError(error);
    if (Object.values(error).some((err) => err)) return;

    setStudents([...students, formData]);
    setFormData(initialState);

    // if (nameRef.current) nameRef.current.value = "";
    // if (ageRef.current) ageRef.current.value = "";
    // if (emailRef.current) emailRef.current.value = "";
    // if (classRef.current) classRef.current.value = "";
  };

  // useEffect(() => {
  //   console.log("Firing useEffect");
  //   if (nameRef.current?.value === "Amdin") {
  //     alert("You entered a name that will not be store in database.");
  //   }
  // }, [nameRef]);

  // useEffect(() => {
  //   console.log("Firing useEffect");
  //   if (formData.name === "Amdin") {
  //     alert("You entered a name that will not be store in database.");
  //   }
  // }, [formData.name]);

  useEffect(() => {
    console.log("Firing useEffect");
    if (formData.fullName === "Admin") {
      alert("You entered a name that will not be store in database.");
    }
  }, [formData.fullName]);

  return (
    <Paper
      sx={{
        width: 300, // width = 300px
        padding: 5, // 1 as a no. withOut Unit in padding = 8px ==> 5 padding = 5 * 8px = 40px
        // marginTop: "25px", // margin = 25px
        // gap: 4, // 1 gap = 8px ==> 4 gap = 4 * 8px = 32px
        marginTop: 1,
        gap: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        // inputRef={nameRef}
        onChange={handleChange}
        value={formData.fullName}
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
        // sx={{ marginBottom: 4 }}
        // onChange={handleNameChange}
        type="text"
        error={formError.fullName}
        helperText={formError.fullName ? "Full name is required > 3 Char" : ""}
        required
      />
      <TextField
        // inputRef={ageRef}
        onChange={handleChange}
        value={formData.age}
        id="outlined-basic"
        label="Age"
        name="age"
        variant="outlined"
        // onChange={handleAgeChange}
        type="number"
        error={formError.age}
        helperText={formError.age ? "Age is required" : ""}
        required
      />
      <TextField
        // inputRef={emailRef}
        onChange={handleChange}
        value={formData.email}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
        // onChange={handleEmailChange}
        type="email"
        error={formError.email}
        helperText={formError.email ? "Email is required" : ""}
        required
      />
      <TextField
        // inputRef={classRef}
        onChange={handleChange}
        value={formData.class}
        id="outlined-basic"
        label="Class"
        name="class"
        variant="outlined"
        // onChange={handleClassChange}
        type="text"
        error={formError.class}
        helperText={formError.class ? "Class is required" : ""}
        required
      />
      <TextField
        onChange={handleChange}
        value={formData.year}
        id="outlined-basic"
        label="Year"
        name="year"
        variant="outlined"
        type="number"
        error={formError.year}
        helperText={formError.year ? "Year is required" : ""}
        required
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit
      </Button>
      {/* {formData.fullName.trim().length === 0 && (
        <p style={{ color: "red" }}>Full name is required</p>
      )}
      {formData.age.trim().length === 0 && (
        <p style={{ color: "red" }}>Age is required</p>
      )}
      {formData.email.trim().length === 0 && (
        <p style={{ color: "red" }}>Email is required</p>
      )}
      {formData.class.trim().length === 0 && (
        <p style={{ color: "red" }}>Class is required</p>
      )}
      {formData.year.trim().length === 0 && (
        <p style={{ color: "red" }}>Year is required</p>
      )} */}
    </Paper>
  );
};
