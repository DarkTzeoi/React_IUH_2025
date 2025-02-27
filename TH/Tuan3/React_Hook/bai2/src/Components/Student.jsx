import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { initialState, studentReducer } from "./Student_Reducer";

const Student = () => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  const [name, setName] = useState("");
  const [thuongKy, setThuongKy] = useState("");
  const [thucHanh, setThucHanh] = useState("");
  const [giuaKy, setGiuaKy] = useState("");
  const [cuoiKy, setCuoiKy] = useState("");
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    if (storedStudents) {
      dispatch({ type: "SET", payload: storedStudents });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(state.students));
  }, [state.students]);

  const averageScore = useMemo(() => {
    if (state.students.length === 0) return 0;
    const totalScore = state.students.reduce(
      (sum, student) =>
        sum +
        (student.thuongKy +
          student.thucHanh +
          student.giuaKy +
          student.cuoiKy) /
          4,
      0
    );
    return (totalScore / state.students.length).toFixed(2);
  }, [state.students]);

  const handleAddStudent = () => {
    if (
      !name.trim() ||
      thuongKy === "" ||
      thucHanh === "" ||
      giuaKy === "" ||
      cuoiKy === ""
    )
      return;

    const newStudent = {
      id: editingId || Date.now().toString(),
      name,
      thuongKy: parseFloat(thuongKy),
      thucHanh: parseFloat(thucHanh),
      giuaKy: parseFloat(giuaKy),
      cuoiKy: parseFloat(cuoiKy),
    };

    if (editingId) {
      dispatch({ type: "EDIT", payload: newStudent });
      setEditingId(null);
    } else {
      dispatch({ type: "ADD", payload: newStudent });
    }

    setName("");
    setThuongKy("");
    setThucHanh("");
    setGiuaKy("");
    setCuoiKy("");
    inputRef.current.focus();
  };

  // Xử lý chỉnh sửa sinh viên
  const handleEdit = (student) => {
    setName(student.name);
    setThuongKy(student.thuongKy);
    setThucHanh(student.thucHanh);
    setGiuaKy(student.giuaKy);
    setCuoiKy(student.cuoiKy);
    setEditingId(student.id);
    inputRef.current.focus();
  };

  // Xử lý xoá sinh viên
  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {state.students.map((student) => (
          <li key={student.id}>
            {student.name} - Điểm trung bình:{" "}
            {/* {(
              (student.thuongKy +
                student.thucHanh +
                student.giuaKy +
                student.cuoiKy) /
              4
            ).toFixed(2)} */}
            {averageScore}
            <button onClick={() => handleEdit(student)}>Sửa</button>
            <button onClick={() => handleDelete(student.id)}>Xoá</button>
          </li>
        ))}
      </ul>

      <h3>{editingId ? "Sửa sinh viên" : "Thêm sinh viên"}</h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tên sinh viên"
        onKeyDown={(e) => e.key === "Enter" && handleAddStudent()}
      />
      <input
        type="number"
        value={thuongKy}
        onChange={(e) => setThuongKy(e.target.value)}
        placeholder="Điểm thường kỳ"
        onKeyDown={(e) => e.key === "Enter" && handleAddStudent()}
      />
      <input
        type="number"
        value={thucHanh}
        onChange={(e) => setThucHanh(e.target.value)}
        placeholder="Điểm thực hành"
        onKeyDown={(e) => e.key === "Enter" && handleAddStudent()}
      />
      <input
        type="number"
        value={giuaKy}
        onChange={(e) => setGiuaKy(e.target.value)}
        placeholder="Điểm giữa kỳ"
        onKeyDown={(e) => e.key === "Enter" && handleAddStudent()}
      />
      <input
        type="number"
        value={cuoiKy}
        onChange={(e) => setCuoiKy(e.target.value)}
        placeholder="Điểm cuối kỳ"
        onKeyDown={(e) => e.key === "Enter" && handleAddStudent()}
      />
      <button
        onClick={handleAddStudent}
        onKeyDown={(e) => e.key === "Enter" && handleAddStudent()}
      >
        {editingId ? "Sửa điểm" : "Thêm sinh viên"}
      </button>
    </div>
  );
};

export default Student;
