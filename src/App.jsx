import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FloatingActions from './components/FloatingActions/FloatingActions'
import Home from './pages/Home/Home'
import './App.scss'

// Köpükler artık sadece Hero ve Services içinde render ediliyor.
export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Home />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
