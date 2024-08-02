import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "./TodoSlice";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          onClick={() => dispatch(toggleTodo(todo.id))}
          key={todo.id}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
