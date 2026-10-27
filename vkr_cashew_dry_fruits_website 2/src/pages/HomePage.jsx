import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, WHATSAPP_NUMBER, PHONE_1, WHATSAPP_DEFAULT_MSG } from '../data/products'
import ProductCard from '../components/ProductCard'
import EnquiryModal from '../components/EnquiryModal'

export default function HomePage() {
  const [filter, setFilter] = useState('all')
  const [activeModalProduct, setActiveModalProduct] = useState(null)

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) => p.categorySlug === filter)

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24">
        {/* Ambient Gilded Radial Glow */}
        <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-[30rem] h-[30rem] rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col space-y-space-md">
              {/* Jubilee Flag */}
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container rounded shadow-sm">
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                  Golden Jubilee Edition • 1976–2026
                </span>
              </div>
              {/* Main Serif Headline */}
              <div className="space-y-space-xs">
                <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
                  50 Years of Trust.
                  <br />
                  <span className="italic font-normal text-secondary">Premium Quality.</span>
                </h1>
                <p className="font-title-lg text-title-lg text-on-surface-variant font-medium">
                  Premium Cashews &amp; Dry Fruits Since 1976
                </p>
              </div>
              {/* Tagline Narrative */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                For five decades, VKR has built its journey on uncompromising purity, consistency,
                and deep customer trust. Discover our masterfully graded ivory cashews and
                orchard-selected dry fruits crafted for discerning retail, wholesale, and institutional
                mandates.
              </p>
              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  className="inline-flex items-center justify-center px-space-lg py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow-md hover:bg-primary transition-all"
                  href="#featured-products"
                >
                  <span>Explore Products</span>
                  <span className="material-symbols-outlined ml-2 text-[18px]">south</span>
                </a>
                <Link
                  className="inline-flex items-center justify-center px-space-lg py-3.5 bg-surface-container-lowest text-primary font-label-lg text-label-lg rounded shadow-sm hover:bg-surface-container transition-all"
                  to="/wholesale"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px] text-secondary">
                    inventory_2
                  </span>
                  <span>Wholesale Enquiry</span>
                </Link>
              </div>
              {/* Trust Badges List */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-md max-w-xl">
                <div className="flex flex-col p-space-sm bg-surface-container-lowest rounded shadow-sm">
                  <span className="font-label-lg text-label-lg text-secondary">Panruti Origin</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct Processing
                  </span>
                </div>
                <div className="flex flex-col p-space-sm bg-surface-container-lowest rounded shadow-sm">
                  <span className="font-label-lg text-label-lg text-secondary">Grade Standard</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    W180 to W400 &amp; Splits
                  </span>
                </div>
                <div className="flex flex-col p-space-sm bg-surface-container-lowest rounded shadow-sm">
                  <span className="font-label-lg text-label-lg text-secondary">Direct Lines</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{PHONE_1}</span>
                </div>
              </div>
            </div>
            {/* Visual Column with Overlapping Elements */}
            <div className="lg:col-span-5 relative flex justify-center mt-space-lg lg:mt-0">
              <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-surface-container via-surface-container-low to-surface-container-high p-4 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    alt="Exquisite studio culinary still life featuring King Cashew W180 kernels alongside California almonds, Kashmiri walnuts, plump Medjool dates, dried Athi Palam figs, golden and black raisins on an ivory velvet surface"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAf4v99w-B1_o9emj4JZRRWk_GFq5J2I0IRCR9_ckZ-_fzD-oI1GswXnWAZPVzKjoN42AoPfRER4BnPa6UzVp7Wco4aCJRSvdYwqtTPFc6CMj9ekBpIedG1RmQLRTYrLV7dwfP8PMiH3uwMt1WcXoH7WPhSee3yK1X9dBk12WWmMlTLq4nFtMJ2leYmUmI9wQWGYI1Mr26TVrvPnxgNqnF2DoOqSjLzK-abiGaEwkyXUafJNcLZ0xm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/40 via-transparent to-transparent"></div>
                </div>
                {/* Floating 50-Year Commemorative Medal */}
                <div className="absolute -bottom-4 -left-4 bg-primary-container text-on-primary p-space-md rounded-xl shadow-xl flex items-center gap-space-sm max-w-[280px]">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                    <span
                      className="material-symbols-outlined text-primary text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      workspace_premium
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-secondary-fixed font-bold tracking-widest uppercase">
                      50 YEARS • 1976–2026
                    </span>
                    <span className="font-title-md text-title-md text-surface-bright font-bold leading-tight">
                      Five Decades of Quality
                    </span>
                    <span className="font-body-sm text-body-sm text-inverse-on-surface/80">
                      Trust &amp; Natural Taste
                    </span>
                  </div>
                </div>
                {/* Verified Origin Stamp Floating Top Right */}
                <div className="absolute -top-3 -right-3 bg-surface-container-lowest text-on-surface px-space-sm py-2 rounded shadow-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                  <span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase">
                    Authentic Panruti
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 50TH ANNIVERSARY HERITAGE & TIMELINE */}
      <section className="w-full bg-primary-container text-inverse-on-surface py-space-xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div className="space-y-space-xs max-w-2xl">
              <div className="inline-flex items-center gap-2 text-secondary-fixed">
                <span className="material-symbols-outlined text-[18px]">history_edu</span>
                <span className="font-label-md text-label-md uppercase tracking-widest font-bold">
                  1976 — 2026 Golden Jubilee Milestone
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-surface-bright font-bold">
                A Legacy Built on Quality &amp; Trust
              </h2>
              <p className="font-body-lg text-body-lg text-outline-variant leading-relaxed">
                Since 1976, VKR has grown through deep agricultural knowledge, tireless dedication,
                and enduring customer relationships. Today, we proudly commemorate 50 uninterrupted
                years in the cashew and dry-fruit industry.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="font-headline-xl text-headline-xl text-secondary-fixed font-bold leading-none">
                50
              </span>
              <span className="font-label-lg text-label-lg text-outline-variant tracking-wider uppercase">
                Glorious Harvest Years
              </span>
            </div>
          </div>
          {/* Timeline Bento Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Milestone 1 */}
            <div className="p-space-md bg-surface-container-highest/10 rounded-xl flex flex-col justify-between space-y-space-md relative hover:bg-surface-container-highest/15 transition-all">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    1976
                  </span>
                  <span className="font-label-md text-label-md text-outline-variant uppercase">
                    Foundation
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright font-bold">
                  Inception &amp; Commitment
                </h3>
                <p className="font-body-md text-body-md text-outline-variant">
                  VKR begins its journey with an unyielding commitment to rigorous grading standards,
                  absolute purity, and genuine client transparency.
                </p>
              </div>
              <div className="flex items-center text-secondary-fixed font-label-md text-label-md gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Ethical Sourcing Set</span>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="p-space-md bg-surface-container-highest/10 rounded-xl flex flex-col justify-between space-y-space-md relative hover:bg-surface-container-highest/15 transition-all">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    1990s
                  </span>
                  <span className="font-label-md text-label-md text-outline-variant uppercase">
                    Evolution
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright font-bold">
                  Growing Through Generations
                </h3>
                <p className="font-body-md text-body-md text-outline-variant">
                  Handed-down kernel expertise, generational roasting wisdom, and customer
                  relationships established throughout South India.
                </p>
              </div>
              <div className="flex items-center text-secondary-fixed font-label-md text-label-md gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Family Craftsmanship</span>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="p-space-md bg-surface-container-highest/10 rounded-xl flex flex-col justify-between space-y-space-md relative hover:bg-surface-container-highest/15 transition-all">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    2010s
                  </span>
                  <span className="font-label-md text-label-md text-outline-variant uppercase">
                    Expansion
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright font-bold">
                  Panruti Processing Hub
                </h3>
                <p className="font-body-md text-body-md text-outline-variant">
                  Establishing advanced processing at VeerasinganKuppam, Panruti — South India&apos;s
                  historic heartland for sweet, premium cashews.
                </p>
              </div>
              <div className="flex items-center text-secondary-fixed font-label-md text-label-md gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Direct Processing Hub</span>
              </div>
            </div>
            {/* Milestone 4 */}
            <div className="p-space-md bg-surface-container-highest/10 rounded-xl flex flex-col justify-between space-y-space-md relative hover:bg-surface-container-highest/15 transition-all">
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    2026
                  </span>
                  <span className="font-label-md text-label-md text-secondary-fixed uppercase font-bold">
                    Jubilee
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-surface-bright font-bold">
                  50 Years of Excellence
                </h3>
                <p className="font-body-md text-body-md text-outline-variant">
                  Celebrating five decades of nationwide supply, wholesale trust, and providing gourmet
                  dry fruits to thousands of households.
                </p>
              </div>
              <div className="flex items-center text-secondary-fixed font-label-md text-label-md gap-1">
                <span className="material-symbols-outlined text-[16px]">military_tech</span>
                <span>Golden Milestone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES DUAL SHOWCASE */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          {/* Section Intro */}
          <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
              Bespoke Harvest Collections
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
              Curated Product Portfolios
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Explore our signature cashew grade spectrum along with hand-selected gourmet dry fruits
              procured directly from celebrated orchards.
            </p>
          </div>
          {/* Two Main Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Pillar 1: CASHEWS */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-md">
                <div className="w-full h-56 rounded-lg overflow-hidden relative">
                  <img
                    alt="Macro editorial photography of hand sorted jumbo ivory cashew nuts grade W180 resting on burlap sack beside dark mahogany wood bowl with soft golden sunlight"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtAabDIW1COMfwFOYi9V7GhOjqS0smvmF2ljmPJ0hgeD-r9lO2BGI3PiJ1fw4T4Oha3JJH8JjTi6HcQ4C5QvQuAGbjMqs-aOfPd7IEJKeQGP8whwngyIcy1IoDTeUw46xF65qu5_Dp0CP0vRkAxgjrP6-954S075AouTDLbkLw-iQU2I0z2FZ6Rrv6vbTuH1rb3wevbii4GOGRnna9KAhtruDyFd0Dt7EunM9dMITBMAhiKxZL8g45"
                  />
                  <div className="absolute top-3 left-3 bg-primary-container text-on-primary font-label-md text-label-md px-3 py-1 rounded">
                    Panruti Speciality
                  </div>
                </div>
                <div className="space-y-space-xs">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Premium Cashew Grades
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Carefully calibrated cashew grades catering to retail culinary use, celebratory
                    gifting, sweet confectionery, and nationwide bulk distribution.
                  </p>
                </div>
                {/* Grade chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    W180 (King Size)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    W240 (Large Jumbo)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    W320 (Popular)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    W400 (Economy)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Splits (JH)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Pieces (WSP)
                  </span>
                </div>
              </div>
              <div className="pt-space-sm flex items-center justify-between">
                <Link
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-secondary font-bold hover:underline"
                  to="/cashews"
                >
                  <span>Explore Cashew Catalog</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button
                  className="px-space-md py-2 bg-surface-container text-primary font-label-md text-label-md rounded hover:bg-surface-container-high transition-colors"
                  onClick={() =>
                    setActiveModalProduct({
                      name: 'Cashew Grade Selection (Bulk & Retail)',
                      category: 'Cashews',
                    })
                  }
                  type="button"
                >
                  Direct Enquiry
                </button>
              </div>
            </div>
            {/* Pillar 2: DRY FRUITS */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-md">
                <div className="w-full h-56 rounded-lg overflow-hidden relative">
                  <img
                    alt="Luxurious overhead assortment of California almonds, rich Kashmiri walnuts, dried royal figs Athi Palam, Iranian pistachios, and Medjool dates on polished warm beige marble stone"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu8BjHtLUTOQ0YWni1bDJayioW8diK6gaI0jCzigwJ3JWWTsJxjThf98b_WdvEqv7v2qmg3hFnN9Xu1g8ah_TMaS3CkdD-Fb9DZdBvJji2DNIzKv0F7bLB__Pt-0Gf0C8rOio_O0P9M4ZhDf3n1gqYgLmxQyismnf3L0RpAPMI33e94vsLk0ZQ-82CdLMXkJbDVaqB-e-8G6MrzRojdhV777oVXbVofqd0sVpv7ykIZT4-xUpWgVdT"
                  />
                  <div className="absolute top-3 left-3 bg-secondary text-on-secondary font-label-md text-label-md px-3 py-1 rounded">
                    Gourmet Selection
                  </div>
                </div>
                <div className="space-y-space-xs">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Premium Dry Fruits
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Naturally rich, unadulterated orchard-fresh dried fruits sourced under strict
                    moisture, kernel oil, and size quality standards.
                  </p>
                </div>
                {/* Item chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    California Almonds
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Kashmiri Akhrot
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Athi Palam (Figs)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Medjool Dates
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Golden Raisins
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Roasted Pistachios
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded font-label-md text-label-md text-primary font-semibold">
                    Crisp Foxnuts (Makhana)
                  </span>
                </div>
              </div>
              <div className="pt-space-sm flex items-center justify-between">
                <Link
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-secondary font-bold hover:underline"
                  to="/dry-fruits"
                >
                  <span>Explore Dry Fruit Catalog</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button
                  className="px-space-md py-2 bg-surface-container text-primary font-label-md text-label-md rounded hover:bg-surface-container-high transition-colors"
                  onClick={() =>
                    setActiveModalProduct({
                      name: 'Dry Fruits Assortment',
                      category: 'Dry Fruits',
                    })
                  }
                  type="button"
                >
                  Direct Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS GRID */}
      <section className="w-full py-space-xl bg-surface-container-low" id="featured-products">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header with Quick Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                Direct Wholesale &amp; Retail
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                Featured Signature Products
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Pure grade consistency with zero artificial polish or chemical processing. Sourced fresh
                and graded with fifty years of mastery.
              </p>
            </div>
            {/* Filter tabs */}
            <div className="flex items-center gap-2 bg-surface-container p-1 rounded-lg self-start md:self-auto">
              <button
                className={`product-filter-btn px-3 py-1.5 rounded font-label-md text-label-md transition-all ${
                  filter === 'all'
                    ? 'bg-primary-container text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setFilter('all')}
                type="button"
              >
                All Items
              </button>
              <button
                className={`product-filter-btn px-3 py-1.5 rounded font-label-md text-label-md transition-all ${
                  filter === 'cashews'
                    ? 'bg-primary-container text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setFilter('cashews')}
                type="button"
              >
                Cashews
              </button>
              <button
                className={`product-filter-btn px-3 py-1.5 rounded font-label-md text-label-md transition-all ${
                  filter === 'dry-fruits'
                    ? 'bg-primary-container text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setFilter('dry-fruits')}
                type="button"
              >
                Dry Fruits
              </button>
            </div>
          </div>
          {/* Product Cards Grid (8 Core Items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {filteredProducts.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onGetPrice={(p) => setActiveModalProduct(p)}
              />
            ))}
          </div>
          {/* Quick Catalog Navigation Link */}
          <div className="mt-space-xl p-space-md bg-surface-container rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-sm shadow-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[22px]">list_alt</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-primary font-bold">
                  Looking for Splits, Pieces, or Athi Palam (Figs)?
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  We stock WSP, JH Splits, Foxnuts (Makhana), Golden &amp; Black Raisins in bulk
                  packaging.
                </p>
              </div>
            </div>
            <Link
              className="px-space-md py-2.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded hover:bg-primary transition-colors shrink-0"
              to="/wholesale"
            >
              Request Wholesale Rate Card
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION & PANRUTI HERITAGE STRIP */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
          {/* Panruti Origin Spotlight */}
          <div className="bg-primary-container text-inverse-on-surface rounded-xl p-space-lg lg:p-space-xl shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
              <div className="lg:col-span-8 space-y-space-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest/15 rounded text-secondary-fixed font-label-md text-label-md tracking-wider uppercase">
                  <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                  <span>Panruti Cashew Capital of Tamil Nadu</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-surface-bright font-bold">
                  Direct from Panruti’s Renowned Cashew Belt
                </h2>
                <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl leading-relaxed">
                  Panruti is globally renowned for producing cashews with uniquely high natural sugar
                  and rich kernel oils. VKR Agencies processes directly at the source in
                  VeerasinganKuppam, cutting middle tiers to deliver peak harvest freshness directly
                  to your retail store or institutional facility.
                </p>
                <div className="pt-space-xs text-outline-variant font-body-md text-body-md flex flex-wrap gap-x-6 gap-y-2">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      factory
                    </span>{' '}
                    VKR Agencies, VeerasinganKuppam
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                      location_city
                    </span>{' '}
                    Panruti, Cuddalore – 607805
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-space-sm">
                <div className="p-space-md bg-surface-container-highest/10 rounded-xl space-y-2 w-full lg:max-w-xs">
                  <span className="font-label-md text-label-md text-secondary-fixed uppercase font-bold tracking-wider">
                    Direct Verification
                  </span>
                  <div className="font-headline-md text-headline-md font-bold text-surface-bright">
                    {PHONE_1}
                  </div>
                  <p className="font-body-sm text-body-sm text-outline-variant">
                    Immediate dispatch quotes for 50kg bags to multi-ton institutional lots.
                  </p>
                  <a
                    className="mt-2 w-full py-2.5 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold rounded flex items-center justify-center gap-1.5 hover:bg-secondary-fixed-dim transition-colors"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello VKR Agencies Panruti, I am inquiring about direct factory rates.')}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Chat with Factory Manager</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Step Farm-To-Table Quality Process Diagram */}
          <div className="space-y-space-md">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                Uncompromising Standard
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                The 5-Stage VKR Quality Discipline
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                How five decades of experience guards every batch
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
              {/* Step 1 */}
              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm space-y-space-xs flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary font-bold">
                    01
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">Selection</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Raw seed nuts carefully procured from verified growers across Panruti and
                    certified global orchards.
                  </p>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-full"></div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm space-y-space-xs flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary font-bold">
                    02
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">Processing</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Gentle steam roasting, precision decortication, and artisanal peeling that
                    maintains whole kernel integrity.
                  </p>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-full"></div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm space-y-space-xs flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary font-bold">
                    03
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">Quality Check</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Hand sorting across strict size matrices (W180–W400), moisture control, and
                    optical inspection.
                  </p>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-full"></div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm space-y-space-xs flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary font-bold">
                    04
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">Packaging</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Vacuum sealed nitrogen-flushed tins and airtight foil barrier poly bags to lock in
                    fresh crunch.
                  </p>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-full"></div>
                </div>
              </div>
              {/* Step 5 */}
              <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm space-y-space-xs flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary font-bold">
                    05
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">To Customer</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct dispatch from Neyveli bazaar counter or VeerasinganKuppam factory to homes &amp;
                    businesses nationwide.
                  </p>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT WHATSAPP & CALL BANNER */}
      <section className="w-full py-space-xl bg-surface-container">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="space-y-space-xs max-w-2xl text-center lg:text-left">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                Direct Counter Line • Neyveli &amp; Panruti
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                Ready to discuss your bulk order or custom gift hampers?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Connect directly with our 50-year trade specialists for today’s live spot prices,
                bulk slab discounts, and safe freight options.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-3.5 bg-surface-container text-primary font-label-lg text-label-lg rounded hover:bg-surface-container-high transition-colors"
                href={`tel:${PHONE_1}`}
              >
                <span className="material-symbols-outlined mr-2 text-[20px] text-secondary">
                  call
                </span>
                <span>Call {PHONE_1}</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow-md hover:bg-primary transition-all"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined mr-2 text-[20px] text-secondary-fixed">
                  chat
                </span>
                <span>WhatsApp Quick Order</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Get Best Price */}
      {activeModalProduct && (
        <EnquiryModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </div>
  )
}
