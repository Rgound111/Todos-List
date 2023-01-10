
import './App.css';
import Header from "./My components/Header";
import AddTodo from "./My components/AddTodo";
import Todos from "./My components/Todos";
import Footer from "./My components/Footer";
import About from './My components/About';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    console.log("Here your todos", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const addTodo = (title, desc) => {
    console.log("Your todos is", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (<>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} ondelete={ondelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
