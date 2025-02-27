import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { todoReducer } from "./TodoReducer";
import { MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch({ type: "SET", payload: storedTodos });
    }
  }, []);

  // Lưu dữ liệu vào localStorage khi todos thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    dispatch({ type: "ADD", payload: newTodo });
    setInputValue("");
    inputRef.current.focus();
  };

  const filteredTodos = useMemo(() => {
    return {
      incomplete: todos.filter((todo) => !todo.completed),
      completed: todos.filter((todo) => todo.completed),
    };
  }, [todos]);

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        />

        <button onClick={handleAddTodo}>+</button>
      </div>

      <div className="todo-container">
        <h3>Chưa hoàn thành</h3>
        <ul>
          {filteredTodos.incomplete.map((todo) => (
            <div key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: "TOGGLE", payload: todo.id })}
              />
              <label>{todo.text}</label>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
                className="delete-btn"
              >
                <MdDeleteForever style={{ width: "30px", height: "30px" }} />
              </button>
            </div>
          ))}
        </ul>

        <h3>Đã hoàn thành</h3>
        <ul>
          {filteredTodos.completed.map((todo) => (
            <div key={todo.id} className="todo-item completed">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: "TOGGLE", payload: todo.id })}
              />
              <label>{todo.text}</label>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
                className="delete-btn"
              >
                <MdDeleteForever style={{ width: "30px", height: "30px" }} />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
