import { Routes, Route } from "react-router-dom";
import './App.css';
import Calender from "./Pages/Calender";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home/Home";
import Navbar from './Pages/Navbar';
import Task from "./Pages/Task";
import Todo from "./Pages/Todo";
import UpdateTask from "./Pages/UpdateTask";

function App() {
  return (
    <div>

      <div className="App px-12">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home> </Home>} > </Route>
          <Route path="/todo" element={<Todo></Todo>} > </Route>
          <Route path="/task" element={<Task />} > </Route>
          <Route path="/update/:id" element={<UpdateTask />} > </Route>
          <Route path="/calender" element={< Calender />} > </Route>
          <Route path="*" element={< Calender />} > </Route>

        </Routes>

      </div>
      <Footer></Footer>
    </div>


  );
}

export default App;
