const initialState = {
  students: [
    {
      id: "1",
      name: "Pham Dac Thinh",
      thuongKy: 7,
      thucHanh: 8,
      giuaKy: 9,
      cuoiKy: 10,
    },
  ],
};

const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, students: action.payload };
    case "ADD":
      return { ...state, students: [...state.students, action.payload] };
    case "EDIT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    case "DELETE":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export { initialState, studentReducer };
