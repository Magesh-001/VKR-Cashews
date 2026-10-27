import { Link } from 'react-router-dom'
import { PHONE_1, PHONE_2, EMAIL } from '../data/products'

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface pt-space-xl pb-space-lg shadow-inner">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          {/* Brand & Golden Jubilee */}
          <div className="space-y-space-md">
            <Link to="/" className="flex items-center gap-space-xs">
              <img
                alt="VKR Premium Cashew & Dry Fruits Emblem"
                className="h-10 w-auto object-contain"
                src="/logo.png"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="font-title-lg text-title-lg font-bold tracking-tight text-surface-bright">
                VKR CASHEW
              </span>
            </Link>
            <p className="font-body-md text-body-md text-outline-variant leading-relaxed">
              50 Years of Trust &amp; Quality • Established in 1976.
              <br />
              Premium Quality. Trusted for Generations.
            </p>
            <div className="inline-block px-space-sm py-1 bg-surface-container-highest/10 border border-secondary-fixed/30 rounded-lg">
              <span className="font-label-md text-label-md text-secondary-fixed font-semibold tracking-wider uppercase">
                1976 – 2026 Golden Jubilee
              </span>
            </div>
          </div>

          {/* Cashew Grades Links */}
          <div className="space-y-space-md">
            <h3 className="font-title-md text-title-md font-bold text-surface-bright tracking-wide uppercase">
              Cashew Grades
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-outline-variant">
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/w180">
                  W-180 (King of Cashews)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/w240">
                  W-240 (Large Jumbo)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/w320">
                  W-320 (Standard Popular)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/w400">
                  W-400 (Select Economy)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/splits">
                  Cashew Splits (JH)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/wsp">
                  Cashew Pieces (WSP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Gourmet Dry Fruits Links */}
          <div className="space-y-space-md">
            <h3 className="font-title-md text-title-md font-bold text-surface-bright tracking-wide uppercase">
              Gourmet Dry Fruits
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-outline-variant">
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/almonds">
                  California &amp; Mamra Almonds
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/walnuts">
                  Kashmiri Walnuts (Akhrot)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/athi-palam">
                  Royal Athi Palam (Dried Figs)
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/dates">
                  Medjool &amp; Arabian Dates
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/raisins">
                  Golden &amp; Black Raisins
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" to="/products/pista">
                  Salted Pistachios &amp; Foxnuts
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Locations & Contacts */}
          <div className="space-y-space-md">
            <h3 className="font-title-md text-title-md font-bold text-surface-bright tracking-wide uppercase">
              Direct Locations
            </h3>
            <div className="space-y-space-xs font-body-sm text-body-sm text-outline-variant">
              <p className="text-surface-bright font-semibold">Branch Office (Retail):</p>
              <p>26, Daily Bazaar, Block-19, Neyveli, Cuddalore</p>
              <p className="text-surface-bright font-semibold mt-2">Manufacturing Unit:</p>
              <p>VKR Agencies, VeerasinganKuppam, Panruti, Cuddalore – 607805</p>
              <p className="text-surface-bright font-semibold mt-2">Direct Lines:</p>
              <p className="flex items-center gap-2">
                <a className="hover:text-secondary-fixed transition-colors" href={`tel:${PHONE_1}`}>
                  {PHONE_1}
                </a>{' '}
                •{' '}
                <a className="hover:text-secondary-fixed transition-colors" href={`tel:${PHONE_2}`}>
                  {PHONE_2}
                </a>
              </p>
              <p className="text-surface-bright font-semibold mt-2">Email:</p>
              <p>
                <a className="hover:text-secondary-fixed transition-colors" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-space-md border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-sm text-outline-variant font-body-sm text-body-sm">
          <p>© 2026 VKR Cashew &amp; Dry Fruits. All Rights Reserved. Five Decades of Pure Excellence.</p>
          <div className="flex items-center gap-space-md">
            <Link className="hover:text-secondary-fixed transition-colors" to="/wholesale">
              Institutional Inquiries
            </Link>
            <Link className="hover:text-secondary-fixed transition-colors" to="/contact">
              Support &amp; Bulk Orders
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
