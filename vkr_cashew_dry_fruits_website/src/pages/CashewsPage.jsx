import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cashews, PHONE_1, PHONE_2 } from '../data/products'
import EnquiryModal from '../components/EnquiryModal'

export default function CashewsPage() {
  const [filter, setFilter] = useState('all') // all | whole | pieces
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredCashews =
    filter === 'all'
      ? cashews
      : cashews.filter((c) => c.type === filter)

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Masthead / Header Section */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-space-xl">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl space-y-space-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span className="font-label-md text-label-md uppercase tracking-widest font-semibold">
                  Panruti Heritage Standard • Estd 1976
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
                Premium Cashew Grades
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Explore our carefully selected range of cashew grades, hand-sorted for uniform size,
                moisture perfection, and immaculate visual elegance. Suitable for royal retail,
                corporate gifting, wholesale, and export bulk requirements.
              </p>
            </div>
            {/* Quick Heritage Metric Card */}
            <div className="bg-surface p-space-md rounded-xl shadow-md flex items-center gap-space-md lg:self-center">
              <div className="w-14 h-14 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md text-primary font-bold">
                  50 Years
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Panruti Quality Benchmark • Clean Hand Sorting
                </div>
              </div>
            </div>
          </div>

          {/* Filter Controls & Grade Search Bar */}
          <div className="mt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface p-space-sm rounded-xl shadow-sm">
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                className={`filter-btn px-space-md py-2.5 rounded-lg font-label-lg text-label-lg transition-all ${
                  filter === 'all'
                    ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
                onClick={() => setFilter('all')}
                type="button"
              >
                All Grades ({cashews.length})
              </button>
              <button
                className={`filter-btn px-space-md py-2.5 rounded-lg font-label-lg text-label-lg transition-all ${
                  filter === 'whole'
                    ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
                onClick={() => setFilter('whole')}
                type="button"
              >
                Whole Cashews (4)
              </button>
              <button
                className={`filter-btn px-space-md py-2.5 rounded-lg font-label-lg text-label-lg transition-all ${
                  filter === 'pieces'
                    ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
                onClick={() => setFilter('pieces')}
                type="button"
              >
                Cashew Pieces (2)
              </button>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="font-body-sm text-body-sm text-on-surface-variant hidden lg:inline">
                Direct Desk:
              </span>
              <a
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container rounded-lg text-on-surface hover:text-secondary font-title-md text-title-md transition-colors"
                href={`tel:${PHONE_1}`}
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                <span>{PHONE_1}</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container rounded-lg text-on-surface hover:text-secondary font-title-md text-title-md transition-colors"
                href={`tel:${PHONE_2}`}
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                <span>{PHONE_2}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="w-full py-space-xl max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredCashews.map((c) => (
            <article
              key={c.id}
              className="grade-card group relative bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              data-category={c.type}
            >
              <div className="relative w-full h-64 overflow-hidden bg-surface-container">
                <img
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={c.image}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded bg-primary-container text-secondary-fixed font-label-md text-label-md font-bold tracking-wider uppercase">
                    {c.badge}
                  </span>
                  <span className="px-2 py-1 rounded bg-secondary/90 text-on-secondary font-label-md text-label-md font-medium">
                    {c.subBadge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-on-surface font-label-md text-label-md shadow-sm">
                  {c.countNum}
                </div>
              </div>

              <div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
                <div className="space-y-space-xs">
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      {c.name}
                    </h2>
                    <span className="font-label-md text-label-md text-secondary font-semibold uppercase">
                      {c.badge}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                    {c.description}
                  </p>
                </div>

                <div className="bg-surface-container-low p-space-sm rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                    <span>Uniformity / Quality:</span>
                    <span className="font-semibold text-on-surface">{c.uniformity}</span>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                    <span>Packaging Formats:</span>
                    <span className="font-semibold text-on-surface truncate ml-2 max-w-[170px]" title={c.packaging}>
                      {c.packaging}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                    <span>Pricing:</span>
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      Price on Enquiry
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    to={`/products/${c.slug}`}
                    className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>View Details</span>
                  </Link>
                  <button
                    className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm"
                    onClick={() => setSelectedProduct(c)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                      chat
                    </span>
                    <span>Get Best Price</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Educational Grading Guide Section */}
      <section className="w-full bg-surface-container-high py-space-xl my-space-md">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="max-w-3xl space-y-space-xs">
            <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-widest">
              Standardized Grading System
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              Understanding Cashew Kernel Sizing
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Cashew grades are universally designated by kernel count per pound (453.6 grams). Lower
              counts indicate larger kernel dimensions, requiring meticulous tree care, ideal
              harvest timing, and artisanal peeling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
              <span className="font-headline-md text-headline-md font-bold text-secondary">
                W-180
              </span>
              <h3 className="font-title-md text-title-md font-bold text-primary">King Size</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                160–180 kernels/lb. The largest whole kernel. Reserved for luxury gifts and royal
                presentations.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
              <span className="font-headline-md text-headline-md font-bold text-secondary">
                W-240
              </span>
              <h3 className="font-title-md text-title-md font-bold text-primary">Jumbo Whole</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                220–240 kernels/lb. Imposing size and excellent crunch. Preferred for premium festive
                boxes.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
              <span className="font-headline-md text-headline-md font-bold text-secondary">
                W-320
              </span>
              <h3 className="font-title-md text-title-md font-bold text-primary">Standard Benchmark</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                300–320 kernels/lb. The world’s favorite cashew standard. Perfectly balanced for
                everyday use.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs shadow-sm">
              <span className="font-headline-md text-headline-md font-bold text-secondary">
                W-400 &amp; Splits
              </span>
              <h3 className="font-title-md text-title-md font-bold text-primary">Culinary &amp; Economy</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Compact kernels and natural halves. Maximum yield for traditional sweet shops and
                recipes.
              </p>
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
