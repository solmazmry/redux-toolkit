import "./App.css";
import { Counter } from "./features/counter/Counter";
import TodoInput from "./features/todos/TodoInput";
import TodoList from "./features/todos/TodoList";
import Form from "./features/form/Form"
import ProductList from "./features/products/ProductList";
import DarkModeToggle from "./features/darkMode/DarkModeToggle";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <TodoInput />
      <TodoList />
      <hr/>
      <h3>Qeydiyyat Formu</h3>
      <Form/>
      <hr />
      <h3>Mehsul Siyahisi</h3>
      <ProductList/>
      <hr />
      <DarkModeToggle/>
    </div>
  );
}

export default App;
