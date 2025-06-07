export interface Student {
  id: number;
  // name: string;
  fullName: string;
  // age: number;
  age: string;
  email: string;
  class: string;
  year?: string;
}

export const data: Student[] = [
  {
    id: 1,
    fullName: "Yehia",
    age: "35",
    email: "y@y.com",
    class: "NBA",
  },
  {
    id: 2,
    fullName: "Ali",
    age: "21",
    email: "a@a.com",
    class: "ABC",
  },
];
