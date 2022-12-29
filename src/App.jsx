import AddJob from "./component/AddJob";
import EditJob from "./component/EditJob";
import Login from "./component/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/edit/:id" element={<EditJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
