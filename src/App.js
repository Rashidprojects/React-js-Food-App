import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'
import { AppProvider } from './context/AppProvider'

function App () {

  return (
    <Router> 
      <AppProvider>
        <Header />
        <AppRoutes />
      </AppProvider>
    </Router>
    
  )
}

export default App