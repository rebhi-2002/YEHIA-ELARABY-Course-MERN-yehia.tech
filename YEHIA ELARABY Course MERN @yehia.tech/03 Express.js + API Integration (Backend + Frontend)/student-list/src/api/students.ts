import type { Student } from "../utils/data";

const BASE_URL = "http://localhost:5000/students";

export const fetchStudents = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    // const data = await response.json(); return data;
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const createStudent = async (data: Student) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};
