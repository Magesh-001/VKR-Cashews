import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  searchProducts,
  PHONE_1,
  WHATSAPP_NUMBER,
  WHATSAPP_DEFAULT_MSG,
} from '../data/products'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Cashews', path: '/cashews' },
  { label: 'Dry Fruits', path: '/dry-fruits' },
  { label: 'Wholesale', path: '/wholesale' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (searchQuery.trim()) {
      setSearchResults(searchProducts(searchQuery))
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearchSelect = (slug) => {
    navigate(`/products/${slug}`)
    setSearchOpen(false)
    setSearchQuery('')
  }

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-surface/98 backdrop-blur-md shadow-[0_2px_12px_rgba(43,24,16,0.08)]'
            : 'bg-surface/95 backdrop-blur-md shadow-[0_2px_12px_rgba(43,24,16,0.06)]'
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
          {/* Logo & 50-Year Heritage Badge */}
          <div className="flex items-center gap-space-sm">
            <Link
              to="/"
              className="flex items-center gap-space-xs"
              aria-label="VKR Cashew & Dry Fruits Home"
            >
              <img
                alt="VKR Premium Cashew & Dry Fruits Emblem"
                className="h-10 w-auto object-contain"
                src="/logo.png"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="flex flex-col ml-space-xs">
                <span className="font-title-lg text-title-lg font-bold tracking-tight text-primary leading-tight">
                  VKR
                </span>
                <span className="font-label-md text-label-md tracking-wider text-secondary uppercase font-semibold">
                  Cashew &amp; Dry Fruits
                </span>
              </div>
            </Link>
            <div className="hidden sm:flex flex-col border-l border-outline-variant/60 pl-space-sm ml-space-xs">
              <span className="font-label-md text-label-md text-secondary font-bold tracking-widest uppercase">
                50 Years
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                1976–2026
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-gutter" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isCurrent(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`transition-colors py-2 ${
                    active
                      ? 'text-secondary font-semibold underline decoration-secondary decoration-2 underline-offset-8'
                      : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-space-sm">
            {/* Search Button */}
            <button
              aria-label="Search Products"
              className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors flex items-center justify-center"
              onClick={() => setSearchOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Direct Phone */}
            <a
              className="hidden lg:flex items-center gap-space-xs text-on-surface font-title-md text-title-md hover:text-secondary transition-colors px-2 py-1"
              href={`tel:${PHONE_1}`}
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">call</span>
              <span className="font-semibold">{PHONE_1}</span>
            </a>

            {/* WhatsApp Enquiry Button */}
            <a
              className="hidden md:inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-primary transition-colors"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary-fixed">chat</span>
              <span>WhatsApp Enquiry</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors flex items-center justify-center"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
              type="button"
            >
              <span className="material-symbols-outlined text-[26px]">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="xl:hidden bg-surface/98 backdrop-blur-md border-t border-outline-variant/30 shadow-lg px-margin-mobile py-4 space-y-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const active = isCurrent(link.path)
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2.5 rounded-lg text-left font-body-md text-body-md transition-colors ${
                      active
                        ? 'bg-surface-container font-semibold text-secondary'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <div className="pt-3 border-t border-outline-variant/30 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_1}`}
                className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-lg text-on-surface font-title-md text-title-md"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary">call</span>
                <span>Call {PHONE_1}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">chat</span>
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Product Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false)
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-surface rounded-xl max-w-2xl w-full p-space-md shadow-2xl space-y-space-md">
            <div className="flex items-center justify-between">
              <span className="font-title-md text-title-md font-bold text-primary">
                Instant Catalog Search
              </span>
              <button
                className="text-on-surface-variant hover:text-on-surface p-1 rounded-full transition-colors"
                onClick={() => setSearchOpen(false)}
                type="button"
                aria-label="Close Search"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="relative">
              <input
                autoFocus
                className="w-full bg-surface-container px-4 py-3 rounded-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-secondary font-body-md text-body-md"
                placeholder="Search W180, W240, W320, Almonds, Walnuts, Athi Palam, Dates, Pista, Foxnuts..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">
                search
              </span>
            </div>

            {/* Quick search tags or results */}
            {searchQuery.trim() === '' ? (
              <div className="flex flex-wrap gap-2 pt-2 items-center">
                <span className="font-label-md text-label-md text-on-surface-variant py-1">
                  Suggested:
                </span>
                {['W180', 'W240', 'W320', 'W400', 'Splits', 'Almonds', 'Walnuts', 'Athi Palam', 'Dates', 'Pista', 'Foxnuts'].map((tag) => (
                  <button
                    key={tag}
                    className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors"
                    onClick={() => setSearchQuery(tag)}
                    type="button"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="max-h-72 overflow-y-auto space-y-2 divide-y divide-outline-variant/20 pt-1">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSearchSelect(product.slug)}
                    className="pt-2 first:pt-0 flex items-center justify-between p-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg shrink-0"
                      />
                      <div>
                        <p className="font-title-md text-title-md font-bold text-primary leading-tight">
                          {product.name}
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {product.category} • {product.grade} • {product.badge}
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-on-surface-variant font-body-md text-body-md">
                No matching grades found for &quot;{searchQuery}&quot;. Try &quot;W180&quot;, &quot;Cashews&quot;, or &quot;Almonds&quot;.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
