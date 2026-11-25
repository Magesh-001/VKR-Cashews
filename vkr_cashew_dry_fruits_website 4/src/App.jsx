import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CashewsPage from './pages/CashewsPage'
import DryFruitsPage from './pages/DryFruitsPage'
import WholesalePage from './pages/WholesalePage'
import ContactPage from './pages/ContactPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <ScrollToTop />
      <Navbar />
      <main className="w-full pt-20 bg-background min-h-screen flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cashews" element={<CashewsPage />} />
          <Route path="/dry-fruits" element={<DryFruitsPage />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:slug" element={<ProductDetailsPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
