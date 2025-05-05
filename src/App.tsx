import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AppLayout from './pages/AppLayout';
import EventPage from './pages/EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AppLayout />}>
          <Route path="/solution" element={<div>Solution</div>} />
          <Route path="/resources" >
            <Route path="event" element={<EventPage />} >
              <Route path="blog" element={<div>Blog</div>} />
              <Route path="case" element={<div>Case</div>} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
