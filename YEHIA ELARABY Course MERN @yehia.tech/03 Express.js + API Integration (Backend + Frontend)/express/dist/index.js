"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
// app.get("/", (req, res) => {
//   res.send("Hello World!"); // Hello World!
// });
app.post("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log("Running on port " + port);
});
