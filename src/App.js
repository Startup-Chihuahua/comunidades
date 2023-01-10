import './App.css';
import Navbar from './Layouts/Navbar';
import { Home } from "./components/Home/Home"; 
import { Login } from "./components/Login/Login"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { ROUTES } from './routes/routes'; 
import Ecosistema from './components/Pages/Ecosistema';
import Startups from './components/Pages/Startups';
import Meetup from './components/Pages/Meetup';
import Comunidades from './components/Pages/Comunidades';
import TheTeam from './components/Pages/TheTeam';
import Eventos from './components/Pages/Eventos';
import Contactanos from './components/Pages/Contactanos'; 

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>   
            <Route path={ROUTES.ECOSISTEMA} element={<Ecosistema />} />
            <Route path='Startups' element={<Startups />} />
            <Route path='Meetup' element={<Meetup />} />
            <Route path='Comunidades' element={<Comunidades />} />
            <Route path='TheTeam' element={<TheTeam />} />
            <Route path='Eventos' element={<Eventos />} />
            <Route path='Contactanos' element={<Contactanos />} />
            <Route path={ROUTES.LOGIN} element={<Login />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;               
