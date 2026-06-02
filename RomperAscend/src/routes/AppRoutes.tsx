import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Portfolio from '../pages/Portfolio/Portfolio';
import Servicos from '../pages/Servicos/Servicos';
import Contato from '../pages/Contato/Contato';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}