import './App.css';
import { Home } from './components/HomeComponent';
import { LoginComponent } from './components/LoginComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/login" element={<LoginComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
