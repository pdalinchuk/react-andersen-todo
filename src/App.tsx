import { Routes, Route } from 'react-router-dom';
import ToDoPage from './components/to-do-page/to-do-page.component';
import WelcomePage from './components/welcome-page/welcome-page.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/todopage' element={<ToDoPage />} />
    </Routes>
  );
}

export default App;
