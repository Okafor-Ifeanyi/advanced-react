import './App.css'
import AuthContextProvider from './context/auth.context'
import DashboardPage from './pages/dashboard.page';
import LoginPage from './pages/login.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <AuthContextProvider>

      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< LoginPage />} />
          <Route path='/dashboard' element={< DashboardPage />} />
        </Routes>
      </BrowserRouter>
 
    </AuthContextProvider>
  );
}

export default App