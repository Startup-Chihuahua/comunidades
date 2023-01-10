import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Ecosistema from './components/Pages/Ecosistema';
import Startups from './components/Pages/Startups';
import Meetup from './components/Pages/Meetup';
import Comunidades from './components/Pages/Comunidades';
import TheTeam from './components/Pages/TheTeam';
import Eventos from './components/Pages/Eventos';
import Contactanos from './components/Pages/Contactanos'; 
import Navbar from './Layouts/Navbar';   

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
            <Route path='Ecosistema' element={<Ecosistema />} />
            <Route path='Startups' element={<Startups />} />
            <Route path='Meetup' element={<Meetup />} />
            <Route path='Comunidades' element={<Comunidades />} />
            <Route path='TheTeam' element={<TheTeam />} />
            <Route path='Eventos' element={<Eventos />} />
            <Route path='Contactanos' element={<Contactanos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;               
