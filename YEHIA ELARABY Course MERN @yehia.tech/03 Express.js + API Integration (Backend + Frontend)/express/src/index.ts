import express from "express";
import mongoose from "mongoose";
// import { studentModel } from "./models/student";
import studentsRouter from "./routers/students";
import cors from "cors";

const app = express();
const port = 5000;

// app.use((req, res, next) => {
//   console.log("Hello From Middleware");
//   next();
// });

app.use(
  cors({
    origin: "http://localhost:5173", // Vite Port
  })
);
app.use(express.json());
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

mongoose
  .connect("mongodb://127.0.0.1:27017/students")
  .then(() => console.log("Connected!"));

/*
  app.get("/students", async (req, res) => {
    const students = await studentModel.find();
    // res.send(students); // Postman: http://localhost:5000/students
    // res.status(201).send(students); // 201 Created
    res.status(200).send(students); // 200 OK
  });

  app.get("/students/:id", async (req, res) => {
    const id = req.params.id;

    const student = await studentModel.findById(id);

    if (!student) {
      res.status(404); // 404 Not Found: Student not found
    }

    res.send(student); // http://localhost:5000/students/683c97683bca7dfb374d3bc8
  });

  app.post("/students", async (req, res) => {
    const data = req.body;
    console.log({ data });
    const newStudent = await studentModel.create(data);
    newStudent.save();
    res.status(201).send(newStudent);
  });

  app.put("/students/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const student = await studentModel.findByIdAndUpdate(id, data, { new: true });

    // if (!student) {
    //   res.status(404).send("Student not found");
    // } else {
    //   res.send(student);
    // }

    if (!student) {
      res.status(404).send("Student not found");
      return;
    }

    // res.status(204).send(student); // 204 No Content
    res.send(student); // http://localhost:5000/students/683ca44f4b6f37a9b44b8686 => {"fullName": "Mahmoud", "age": "23"} => {"fullName": "Ahmed"} => {"fullName": "YYYYYY", "email": "y@yyyy.com"}
  });

  app.delete("/students/:id", async (req, res) => {
    const id = req.params.id;

    const student = await studentModel.findByIdAndDelete(id);

    if (!student) {
      res.status(404).send("Student not found");
      return;
    }

    res.send("Okay");
    // res.status(204).send("Okay");
  });
*/

// app.get("/", (req, res) => {
//   const student = new studentModel({
//     fullName: "Yehia",
//     email: "2@2.com",
//   });
//   student.save();

//   res.send("Hello World!"); // Hello World!
// });

// app.post("/", (req, res) => {
//   res.send("Hello World!"); // Cannot GET /
// });

app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log("Running on port " + port);
});
