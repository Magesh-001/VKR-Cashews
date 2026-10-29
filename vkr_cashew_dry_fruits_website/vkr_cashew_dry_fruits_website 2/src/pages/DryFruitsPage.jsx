import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dryFruits, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/products'
import EnquiryModal from '../components/EnquiryModal'

export default function DryFruitsPage() {
  const [filter, setFilter] = useState('all') // all | treenut | driedfruit | superfood
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredDryFruits =
    filter === 'all'
      ? dryFruits
      : dryFruits.filter((d) => d.type === filter)

  return (
    <div className="flex flex-col w-full">
      {/* Page Editorial Introduction */}
      <section className="relative w-full overflow-hidden bg-surface-container-low px-margin-mobile lg:px-margin py-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-gutter relative z-10">
          <div className="max-w-3xl space-y-space-sm">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-highest px-3 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
                Artisanal Reserve • Golden Jubilee Vintage
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
              Premium Dry Fruits
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              A carefully selected range of nutritious and delicious dry fruits, packed with
              wholesome goodness and natural flavor. Hand-sorted under rigorous 50-year heritage
              standards.
            </p>
          </div>
          {/* Jubilee Crest Callout */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md flex items-center gap-space-md self-stretch md:self-auto min-w-[280px]">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-primary-container shadow-sm flex-shrink-0">
              <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg font-bold text-primary uppercase tracking-wider">
                1976 – 2026
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                50 Years of Sovereign Trust &amp; Direct Panruti Lineage
              </span>
            </div>
          </div>
        </div>
        {/* Soft Ambient Graphic Element */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-fixed-dim/20 blur-3xl pointer-events-none"></div>
      </section>

      {/* Filter Bar & Counter */}
      <section className="sticky top-20 z-30 bg-surface/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-all ${
                filter === 'all'
                  ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
              onClick={() => setFilter('all')}
              type="button"
            >
              All Dry Fruits ({dryFruits.length})
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-all ${
                filter === 'treenut'
                  ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
              onClick={() => setFilter('treenut')}
              type="button"
            >
              Tree Nuts (3)
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-all ${
                filter === 'driedfruit'
                  ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
              onClick={() => setFilter('driedfruit')}
              type="button"
            >
              Dried Fruits &amp; Raisins (4)
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md tracking-wider uppercase transition-all ${
                filter === 'superfood'
                  ? 'bg-primary-container text-on-primary shadow-sm font-semibold'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
              onClick={() => setFilter('superfood')}
              type="button"
            >
              Healthy Seeds &amp; Makhana (1)
            </button>
          </div>
          {/* Quick Assistance Link */}
          <div className="hidden lg:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
            <span>Vacuum Batch Certified • Grade 1 Harvest</span>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {filteredDryFruits.map((d) => (
            <article
              key={d.id}
              className="catalog-card group bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              data-category={d.type}
            >
              <div>
                <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
                  <img
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={d.image}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-sm text-surface-bright px-2.5 py-1 rounded-md font-label-md text-label-md uppercase tracking-wider">
                    {d.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-surface-bright/95 text-primary px-2.5 py-1 rounded-md font-label-md text-label-md shadow-sm">
                    {d.subBadge}
                  </div>
                </div>
                <div className="p-space-md space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                      {d.grade}
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      In-Stock
                    </span>
                  </div>
                  <h2 className="font-title-lg text-title-lg text-primary font-bold">{d.name}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    {d.description}
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0 space-y-space-sm">
                <div className="flex items-baseline justify-between bg-surface-container-low px-3 py-2 rounded-lg">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                    Rate
                  </span>
                  <span className="font-title-md text-title-md font-bold text-primary">
                    Price on Enquiry
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={`/products/${d.slug}`}
                    className="w-full py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors text-center font-bold uppercase tracking-wider flex items-center justify-center"
                  >
                    View Details
                  </Link>
                  <button
                    className="w-full py-2.5 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-lg transition-colors text-center font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-1"
                    onClick={() => setSelectedProduct(d)}
                    type="button"
                  >
                    <span>Get Best Price</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Golden Heritage Assurance & Quality Banner */}
      <section className="w-full bg-surface-container-high py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-primary-container rounded-2xl p-space-md lg:p-space-xl text-on-primary shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
              <div className="lg:col-span-8 space-y-space-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest/20 rounded-full">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    verified_user
                  </span>
                  <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider font-semibold">
                    50 Years of Purity Guarantee (1976 – 2026)
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-surface-bright font-bold tracking-tight">
                  Sovereign Standards in Every Grain &amp; Kernel
                </h2>
                <p className="font-body-md text-body-md text-outline-variant max-w-2xl leading-relaxed">
                  Every batch of dry fruits dispatched by VKR Agencies is tested for moisture levels,
                  aflatoxin clearance, and size uniformity. Experience purity directly from source.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-lg py-3.5 bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg rounded-xl shadow-lg hover:bg-secondary-fixed-dim transition-all inline-flex items-center gap-2 font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Enquire Dry Fruits</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <EnquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}
