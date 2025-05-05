import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AppLayout />}>
          <Route path="/solution" element={<div>Solution</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
