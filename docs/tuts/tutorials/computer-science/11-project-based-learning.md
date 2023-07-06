---
sidebar_position: 10
id: project-based-learning
title: Project-Based-Learing 
tags:
  - Project Based Learing
---
# Project Based Learing
Project-Based Learning (PBL) is a teaching method that involves students working on real-world projects to learn and apply concepts and skills. Unlike traditional classroom learning, where students typically learn concepts in isolation and apply them to hypothetical situations, PBL allows students to engage in hands-on, authentic learning experiences. 

In PBL, students take ownership of their learning by selecting, planning, and executing a project that is meaningful and relevant to their interests and goals. The teacher serves as a facilitator, guiding students through the project process and providing support and feedback as needed.

Benefits of Project-Based Learning:
1. Real-world application: PBL allows students to apply their knowledge and skills to real-world problems, preparing them for future careers and life experiences.
2. Improved retention: PBL promotes active and engaged learning, which can improve retention and understanding of concepts.
3. Collaboration and communication: PBL often involves group work, promoting collaboration and communication skills.
4. Creativity and innovation: PBL encourages creativity and innovation as students develop their own projects and solutions.
5. Personalized learning: PBL allows for personalized learning experiences based on student interests, skills, and learning styles.

Sample Project: React Front-End and Java Back-End API

Project Description:
Develop a web-based application that allows users to create and manage to-do lists. The application should have a React front-end and a Java back-end API.

Project Requirements:
1. User registration and login: Users should be able to register for an account and log in to access their to-do lists.
2. To-do lists: Users should be able to create, edit, and delete to-do lists.
3. Tasks: Users should be able to add, edit, and delete tasks within their to-do lists.
4. Back-end API: The back-end API should handle user authentication and data storage.
5. User interface: The user interface should be intuitive and easy to use.

Sample Code:
React Front-End:
```javascript
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TodoLists from './components/TodoLists';
import TodoList from './components/TodoList';
import Task from './components/Task';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/todo-lists/:id/tasks/:id">
          <Task token={token} />
        </Route>
        <Route path="/todo-lists/:id">
          <TodoList token={token} />
        </Route>
        <Route path="/todo-lists">
          <TodoLists token={token} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```

Java Back-End API:
```java
@RestController
@RequestMapping("/api")
public class TodoListController {
    @Autowired
    private TodoListService todoListService;

    @PostMapping("/todo-lists")
    public ResponseEntity<TodoList> createTodoList(@RequestBody TodoList todoList) {
        TodoList createdTodoList = todoListService.createTodoList(todoList);
        return new ResponseEntity<>(createdTodoList, HttpStatus.CREATED);
    }

    @GetMapping("/todo-lists/{id}")
    public ResponseEntity<TodoList> getTodoListById(@PathVariable("id") Long id) {
        TodoList todoList = todoListService.getTodoListById(id);
        return new ResponseEntity<>(todoList, HttpStatus.OK);
    }
```
   