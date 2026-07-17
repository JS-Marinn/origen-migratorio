import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { PromiseStrip } from './components/Sections'
import Home from './pages/Home'
import HablamosEspanol from './pages/HablamosEspanol'
import Servicios from './pages/Servicios'
import ServicioDetalle from './pages/ServicioDetalle'
import Contacto from './pages/Contacto'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hablamos-espanol" element={<HablamosEspanol />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <PromiseStrip />
      <Footer />
    </div>
  )
}
