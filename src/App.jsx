import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./comp/Header/Header";
import Footer from "./comp/footer/footer";
import RoundedAvatar from "./comp/RoundedAvatar/RoundedAvatar";
import Skills from "./comp/Skills/Skills";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day < 10 ? "0" + day : day}.${
    month < 10 ? "0" + month : month
  }.${year} (${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  })`;
};

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Buy meth",
      checked: false,
      date: new Date(),
    },
    {
      id: 2,
      name: "Buy meth",
      checked: false,
      date: new Date(),
    },
    {
      id: 3,
      name: "Buy meth",
      checked: false,
      date: new Date(),
    },
  ]);

  const [value, setValue] = useState("");

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();

    setTodos([...todos, {
      id: Date.now(),
      name: value,
      checked: false,
      date: new Date()
    }]);

    setValue("");
  }

  const toggleChecked = (id) => {
    setTodos((prevState)=>{
      prevState = [...prevState];

      prevState = prevState.map((todo)=> {
        if(id === todo.id) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }
        return todo;
      });
      return prevState;
    });

  }

  const removeTodo = (id)=> {
    setTodos((prevState)=>{
      prevState = [...prevState];

      prevState = prevState.filter((todo)=> todo.id !== id);

      return prevState;
    });
  }

  return (
    <div className="App">
      {/* Container */}
      <div className="container">
        {/* Header */}
        <header>
          <h2>Add todo</h2>
          <form onSubmit={(event)=> onSubmitHandle(event)}>
            <input
              onChange={(event) => onChangeHandle(event)}
              value={value}
              type="text"
              placeholder="exp: buy products"
            />
          </form>
        </header>
        {/* Todos */}
        <div>
          {todos.map((todo) => {
            return (
              <div className="todo">
                <div>
                  <h3>{todo.name}</h3>
                  <p>{formatDate(todo.date)}</p>
                </div>
                <div className="buttons">
                  <div className="buttons__wrapper">
                  <button className="btn"  onClick={()=> toggleChecked(todo.id)}>
                    {todo.checked ? "Not done" : "Done"}</button>
                  <button className="btn" onClick={()=> removeTodo(todo.id)}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
