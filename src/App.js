import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/ra-9.1-router-menu/" element={<HomePage />} />
            <Route path="/ra-9.1-router-menu/drift" element={<DriftPage />} />
            <Route path="/ra-9.1-router-menu/timeattack" element={<TimeAttackPage />} />
            <Route path="/ra-9.1-router-menu/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
