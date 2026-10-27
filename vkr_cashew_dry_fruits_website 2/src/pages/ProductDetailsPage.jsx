import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  getProductBySlug,
  getRelatedProducts,
  WHATSAPP_NUMBER,
  getWhatsAppProductMsg,
  PHONE_1,
} from '../data/products'
import ProductCard from '../components/ProductCard'
import EnquiryModal from '../components/EnquiryModal'

export default function ProductDetailsPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedQty, setSelectedQty] = useState('1–5 kg')
  const [showModal, setShowModal] = useState(false)
  const [modalProduct, setModalProduct] = useState(null)

  if (!product) {
    return <Navigate to="/cashews" replace />
  }

  const relatedProducts = getRelatedProducts(product.slug, product.categorySlug, 3)
  const waProductUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppProductMsg(
    product.name
  )}`

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb Bar */}
      <div className="bg-surface-container-low py-3 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link
            to={product.categorySlug === 'cashews' ? '/cashews' : '/dry-fruits'}
            className="hover:text-primary transition-colors"
          >
            {product.category}
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left: Product Image & Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container shadow-lg border border-outline-variant/30">
                <img
                  src={product.image}
                  alt={`${product.name} — ${product.grade}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-primary-container text-secondary-fixed font-label-md text-label-md font-bold tracking-wider uppercase shadow">
                    {product.grade}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-primary font-label-md text-label-md font-bold shadow">
                  {product.count}
                </div>
              </div>

              {/* Origin Stamp */}
              <div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    verified
                  </span>
                  <div>
                    <p className="font-label-md text-label-md font-bold text-primary">
                      100% Guaranteed Freshness
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Direct processing at VeerasinganKuppam, Panruti
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-md text-label-md text-secondary font-bold uppercase">
                    50 Years
                  </span>
                  <span className="block font-body-sm text-body-sm text-on-surface-variant">
                    1976 – 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product Details, Ordering & Enquiries */}
            <div className="lg:col-span-6 space-y-space-md">
              <div className="space-y-space-xs">
                <div className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-wider font-bold">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span>{product.subBadge}</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
                  {product.displayName || product.name}
                </h1>
                <p className="font-title-md text-title-md text-secondary font-semibold">
                  {product.tagline}
                </p>
              </div>

              {/* Pricing Box */}
              <div className="bg-surface-container-low p-space-md rounded-xl space-y-2 border border-outline-variant/20">
                <div className="flex items-baseline justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase font-semibold">
                    Current Spot Rate:
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    Price on Enquiry
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cashew &amp; dry fruit spot prices change with crop seasons. We dispatch live market quotes within minutes for both retail tins and commercial metric tons.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-space-xs">
                <h3 className="font-label-lg text-label-lg text-primary uppercase font-bold tracking-wider">
                  Product Overview
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {product.longDescription || product.description}
                </p>
              </div>

              {/* Key Applications */}
              {product.keyApplications && product.keyApplications.length > 0 && (
                <div className="space-y-space-xs">
                  <h3 className="font-label-lg text-label-lg text-primary uppercase font-bold tracking-wider">
                    Recommended Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.keyApplications.map((app, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface"
                      >
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          check_circle
                        </span>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Tier Selector */}
              <div className="space-y-space-xs">
                <label className="block font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">
                  Select Desired Quantity Tier:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['1–5 kg', '5–25 kg', '25–100 kg', '100+ kg Bulk'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setSelectedQty(qty)}
                      className={`px-3 py-2.5 rounded-lg text-center font-label-md text-label-md font-semibold transition-all ${
                        selectedQty === qty
                          ? 'bg-primary-container text-surface-bright shadow-sm'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex-1 py-4 px-space-lg bg-primary-container text-surface-bright font-label-lg text-label-lg rounded-xl shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2 font-bold"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                    request_quote
                  </span>
                  <span>Get Best Price</span>
                </button>
                <a
                  href={waProductUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 px-space-lg bg-emerald-700 hover:bg-emerald-800 text-on-primary font-label-lg text-label-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-2 font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Direct call assistance */}
              <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant">
                <span>Direct Desk Assistance:</span>
                <a
                  href={`tel:${PHONE_1}`}
                  className="font-semibold text-primary hover:text-secondary flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
                  <span>{PHONE_1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="py-space-xl bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-md">
          <div className="max-w-2xl space-y-1">
            <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-widest">
              Technical Grading
            </span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              Grade Specifications &amp; Handling
            </h2>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <dl className="divide-y divide-outline-variant/20">
              <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                  Standard Designation
                </dt>
                <dd className="sm:col-span-2 font-body-md text-body-md text-primary font-semibold">
                  {product.grade} ({product.name})
                </dd>
              </div>
              <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                  Kernel Count / Dimension
                </dt>
                <dd className="sm:col-span-2 font-body-md text-body-md text-primary">
                  {product.count} ({product.countNum})
                </dd>
              </div>
              <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                  Kernel Uniformity
                </dt>
                <dd className="sm:col-span-2 font-body-md text-body-md text-primary">
                  {product.uniformity}
                </dd>
              </div>
              <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                  Available Packaging
                </dt>
                <dd className="sm:col-span-2 font-body-md text-body-md text-primary">
                  {product.packaging}
                </dd>
              </div>
              <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="font-label-md text-label-md uppercase text-on-surface-variant font-bold">
                  Primary Origin
                </dt>
                <dd className="sm:col-span-2 font-body-md text-body-md text-primary">
                  Panruti, Tamil Nadu (Cashews) / Choice Certified Global Orchards
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-space-xl bg-surface">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-widest">
                  Complementary Selection
                </span>
                <h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Related Products
                </h2>
              </div>
              <Link
                to={product.categorySlug === 'cashews' ? '/cashews' : '/dry-fruits'}
                className="font-label-lg text-label-lg text-secondary font-bold hover:underline flex items-center gap-1"
              >
                <span>View All {product.category}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onGetPrice={(p) => setModalProduct(p)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modals */}
      {showModal && (
        <EnquiryModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
      {modalProduct && (
        <EnquiryModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  )
}
