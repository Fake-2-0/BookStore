import {BrowserRouter, Routes, Route} from "react-router-dom"
import Book from "./Pages/Book";
import Add from "./Pages/Add";
import Update from "./Pages/Update";
import './Style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
