"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,m=u["".concat(i,".").concat(g)]||u[g]||c[g]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={slug:"react-python-flask-mongo-todo-app",title:"Build a Todos React App using Python Flask Rest API and MongoDB Database",authors:{name:"Vishal"},tags:["react","python","flask","mongodb","restapi"]},l=void 0,p={permalink:"/blog/react-python-flask-mongo-todo-app",source:"@site/blog/2023-08-24-react-python-mongo-todo-app.md",title:"Build a Todos React App using Python Flask Rest API and MongoDB Database",description:"In this tutorial, we will build a full-stack TODOs management application that allows users to create, read, update, and delete todos. We will use React for the frontend user interface and Python Flask for the backend REST API and integrating MongoDB for data storage. By the end of this tutorial, you will have a functional Todo application with CRUD operations. I'll guide you through each step, including installation, setting up the backend, frontend, and database, and explaining the code in detail.",date:"2023-08-24T00:00:00.000Z",formattedDate:"August 24, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"python",permalink:"/blog/tags/python"},{label:"flask",permalink:"/blog/tags/flask"},{label:"mongodb",permalink:"/blog/tags/mongodb"},{label:"restapi",permalink:"/blog/tags/restapi"}],readingTime:3.535,hasTruncateMarker:!1,authors:[{name:"Vishal"}],frontMatter:{slug:"react-python-flask-mongo-todo-app",title:"Build a Todos React App using Python Flask Rest API and MongoDB Database",authors:{name:"Vishal"},tags:["react","python","flask","mongodb","restapi"]},prevItem:{title:"Python CSV FIle Processing, Storing Data in MongoDB, View Data in React UI",permalink:"/blog/react-python-csv-file-processing-mongo"},nextItem:{title:"Build a Todo Management Application with React and Python Flask",permalink:"/blog/react-python-flask-todo-app"}},i={authorsImageUrls:[void 0]},s=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Part 1: Setting Up the Python Flask Backend",id:"part-1-setting-up-the-python-flask-backend",level:2},{value:"Part 2: Building the React Frontend",id:"part-2-building-the-react-frontend",level:2},{value:"Part 3: Running the Application",id:"part-3-running-the-application",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will build a full-stack TODOs management application that allows users to create, read, update, and delete todos. We will use React for the frontend user interface and Python Flask for the backend REST API and integrating MongoDB for data storage. By the end of this tutorial, you will have a functional Todo application with CRUD operations. I'll guide you through each step, including installation, setting up the backend, frontend, and database, and explaining the code in detail."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Basic knowledge of Python, JavaScript, and web development concepts."),(0,o.kt)("li",{parentName:"ul"},"Node.js and npm installed."),(0,o.kt)("li",{parentName:"ul"},"MongoDB installed and running.")),(0,o.kt)("p",null,"Before we begin, make sure you have the following software installed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js and npm"),": Node.js is a JavaScript runtime, and npm is a package manager for Node.js.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python"),": Python is a versatile programming language.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/try/download/community"},"MongoDB"),": MongoDB is a NoSQL database for storing data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/2.1.x/installation/"},"Flask"),": Flask is a micro web framework for Python."))),(0,o.kt)("p",null,"These links will provide you with direct access to the respective download pages, making it easy for you to install the required software components for building your full-stack Todo CRUD application."),(0,o.kt)("p",null,"Let's get started:"),(0,o.kt)("h2",{id:"part-1-setting-up-the-python-flask-backend"},"Part 1: Setting Up the Python Flask Backend"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Create a New Flask App")),(0,o.kt)("p",null,"Create a new directory for your project and navigate to it in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir todo-app\ncd todo-app\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Set Up a Virtual Environment")),(0,o.kt)("p",null,"Create and activate a virtual environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate   # On Windows: venv\\Scripts\\activate\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Install Flask and Required Packages")),(0,o.kt)("p",null,"Install Flask and the ",(0,o.kt)("inlineCode",{parentName:"p"},"pymongo")," package for MongoDB integration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install Flask pymongo\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4: Create the Backend App")),(0,o.kt)("p",null,"Inside your project directory, create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"app.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# app.py\nfrom flask import Flask, request, jsonify\nfrom flask_pymongo import PyMongo\n\napp = Flask(__name__)\napp.config["MONGO_URI"] = "mongodb://localhost:27017/todo_app"\nmongo = PyMongo(app)\n\n# Routes for CRUD operations\n# ...\n\nif __name__ == \'__main__\':\n    app.run(debug=True)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5: Implement CRUD Operations")),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.py")," file to include routes for CRUD operations using MongoDB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# app.py\n# ... (previous code)\n\n@app.route('/api/todos', methods=['POST'])\ndef create_todo():\n    title = request.json.get('title')\n    new_todo = {'title': title, 'completed': False}\n    result = mongo.db.todos.insert_one(new_todo)\n    new_todo['_id'] = str(result.inserted_id)\n    return jsonify(new_todo), 201\n\n@app.route('/api/todos', methods=['GET'])\ndef get_todos():\n    todos = list(mongo.db.todos.find({}))\n    for todo in todos:\n        todo['_id'] = str(todo['_id'])\n    return jsonify(todos)\n\n# Add routes for update and delete operations\n\n# ...\n")),(0,o.kt)("h2",{id:"part-2-building-the-react-frontend"},"Part 2: Building the React Frontend"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Create a New React App")),(0,o.kt)("p",null,"Open a new terminal window and navigate to your project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd todo-app\n")),(0,o.kt)("p",null,"Create a new React app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app frontend\ncd frontend\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Install Axios")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," directory, install Axios to make API requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Create the TodoList Component")),(0,o.kt)("p",null,"Replace the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.js")," with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nfunction App() {\n  const [todos, setTodos] = useState([]);\n  const [newTodo, setNewTodo] = useState('');\n\n  useEffect(() => {\n    fetchTodos();\n  }, []);\n\n  const fetchTodos = async () => {\n    const response = await axios.get('/api/todos');\n    setTodos(response.data);\n  };\n\n  const handleCreate = async () => {\n    if (newTodo.trim() === '') return;\n    await axios.post('/api/todos', { title: newTodo });\n    setNewTodo('');\n    fetchTodos();\n  };\n\n  // Add functions for update and delete operations\n\n  return (\n    <div className=\"App\">\n      <h1>Todo App</h1>\n      <input\n        type=\"text\"\n        value={newTodo}\n        onChange={event => setNewTodo(event.target.value)}\n        placeholder=\"Enter a new todo\"\n      />\n      <button onClick={handleCreate}>Add Todo</button>\n      <ul>\n        {todos.map(todo => (\n          <li key={todo._id}>{todo.title}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("h2",{id:"part-3-running-the-application"},"Part 3: Running the Application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Run the Backend")),(0,o.kt)("p",null,"In the terminal, navigate to your project directory and run the Flask backend:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source venv/bin/activate   # On Windows: venv\\Scripts\\activate\npython app.py\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Run the Frontend")),(0,o.kt)("p",null,"In a new terminal window, navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," directory and start the React app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd todo-app/frontend\nnpm start\n")),(0,o.kt)("p",null,"Your full-stack Todo CRUD application should now be running! Open your browser and visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," to see the app in action."),(0,o.kt)("p",null," You've successfully built a Todo CRUD application using a Python Flask backend, a React frontend, and MongoDB for data storage! You can further enhance this application by adding features such as updating and deleting todos, user authentication, and more advanced UI/UX enhancements."))}c.isMDXComponent=!0}}]);