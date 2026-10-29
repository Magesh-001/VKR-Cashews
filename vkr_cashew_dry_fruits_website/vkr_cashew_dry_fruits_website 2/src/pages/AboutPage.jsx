import { useState } from 'react'
import { WHATSAPP_NUMBER, PHONE_1 } from '../data/products'

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      year: '1976',
      title: 'The Beginning',
      desc: 'VKR begins its journey with an unyielding commitment to rigorous grading standards, absolute purity, and genuine client transparency.',
      icon: 'flag',
    },
    {
      year: 'Growing Years',
      title: 'Experience & Relationships',
      desc: 'The business grows through knowledge, dedication and customer relationships established throughout South India.',
      icon: 'trending_up',
    },
    {
      year: 'Today',
      title: 'Premium Cashews & Dry Fruits',
      desc: 'A wider product range serving retail, wholesale and bulk requirements across India.',
      icon: 'inventory_2',
    },
    {
      year: '2026',
      title: '50 Years',
      desc: 'Celebrating five decades of trust, purity and sovereign quality.',
      icon: 'celebration',
    },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Commemorative Hero Section */}
      <section className="relative bg-surface-container-low px-margin-mobile lg:px-margin py-space-xl overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full shadow-inner">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                workspace_premium
              </span>
              <span className="font-label-md text-label-md text-secondary font-bold tracking-widest uppercase">
                1976 – 2026 Golden Jubilee
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
              A 50-Year Legacy of{' '}
              <span className="italic font-normal text-secondary">Quality &amp; Trust</span>
            </h1>
            <p className="font-title-lg text-title-lg text-on-surface-variant max-w-2xl font-normal leading-relaxed">
              Established in 1976 | Celebrating 1976 — 2026
            </p>
            <p className="font-body-lg text-body-lg text-on-surface max-w-xl leading-relaxed">
              Cultivating generations of culinary perfection from the heart of Tamil Nadu&apos;s cashew
              terrain to homes and institutions nationwide.
            </p>
            <div className="pt-space-xs flex flex-wrap items-center gap-space-md">
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md hover:bg-primary transition-all"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello VKR Cashew, I would like to learn more about your heritage products.')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                  chat
                </span>
                <span>Direct Heritage Enquiry</span>
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-space-md py-3.5 bg-surface text-on-surface font-label-lg text-label-lg rounded-xl shadow-sm hover:bg-surface-container transition-all"
                href="#journey"
              >
                <span>Explore 50-Year Journey</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  arrow_downward
                </span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-space-lg lg:mt-0">
            {/* 50 Years Commemorative Medallion */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-surface-container-high via-surface-container-lowest to-surface-container p-6 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-primary-container p-4 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-radial from-secondary-container/10 via-transparent to-transparent pointer-events-none"></div>
                <span
                  className="material-symbols-outlined text-[36px] text-secondary-fixed mb-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
                <span className="font-headline-xl text-headline-xl text-secondary-fixed font-bold leading-none tracking-tight">
                  50
                </span>
                <span className="font-label-lg text-label-lg text-inverse-on-surface uppercase tracking-widest font-semibold mt-1">
                  Years
                </span>
                <div className="w-16 h-0.5 bg-secondary-fixed/50 my-2"></div>
                <span className="font-label-md text-label-md text-secondary-fixed font-medium uppercase tracking-wider">
                  Golden Jubilee
                </span>
                <span className="font-body-sm text-body-sm text-on-primary-container">
                  1976 – 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Heritage Story Section */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container">
              <img
                alt="Warm artisanal flatlay of king jumbo cashews, golden figs, whole raw walnuts and California almonds resting on vintage linen canvas with soft morning natural lighting"
                className="w-full h-96 sm:h-[460px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5dclQzs2DEBa2AMSJbwSoZJ4ASFuIP6pscnmaZe-KMSt2JLeILG8y8cG4xYEEBjgs1C6ufPH4lqHsYzoNPrJ-5L9LezFpyB0roFngyRAU8_MwpkZ1LzkcAMlkBfumvaLhMK6z07WSlzsvbssVPJHxtX0dn5rCo3b35QbQwtAOePJNWnJAkqpHGswOzurIzlJUJmaA4HvRIo2vMLYFZ2woU6VziEXSyBbqFMXXpTvRjidmUhgL6SM9"
              />
              <div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-primary-container/90 via-primary-container/60 to-transparent text-inverse-on-surface">
                <p className="font-title-md text-title-md font-bold text-surface-bright">
                  Panruti Terroir
                </p>
                <p className="font-body-sm text-body-sm text-outline-variant">
                  VeerasinganKuppam, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-space-md pl-0 lg:pl-space-lg">
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[20px]">history_edu</span>
              <span className="font-label-md text-label-md uppercase tracking-widest font-bold">
                The Heritage Narrative
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              Five Decades of Dedication, Integrity &amp; Pure Taste
            </h2>
            <div className="space-y-space-md text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
              <p className="bg-surface-container-low p-space-md rounded-xl text-on-surface shadow-sm">
                &ldquo;Since 1976, VKR has been building its journey around quality, experience and
                customer trust. Over five decades, our business has grown through dedication,
                knowledge and long-standing relationships with customers and business
                partners.&rdquo;
              </p>
              <p className="bg-surface-container-low p-space-md rounded-xl text-on-surface shadow-sm">
                &ldquo;From our roots in VeerasinganKuppam, Panruti, Cuddalore, we continue to focus on
                carefully selected cashews and dry fruits for retail, wholesale and bulk
                requirements.&rdquo;
              </p>
            </div>
            <div className="pt-space-xs flex items-center gap-space-lg">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-primary">1976</span>
                <span className="font-label-md text-label-md text-secondary uppercase font-semibold">
                  Founding Year
                </span>
              </div>
              <div className="w-px h-10 bg-outline-variant/50"></div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-primary">
                  Panruti
                </span>
                <span className="font-label-md text-label-md text-secondary uppercase font-semibold">
                  Cashew Capital
                </span>
              </div>
              <div className="w-px h-10 bg-outline-variant/50"></div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-bold text-primary">
                  3 Tiers
                </span>
                <span className="font-label-md text-label-md text-secondary uppercase font-semibold">
                  Retail • Bulk • Wholesale
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: OUR VALUES */}
      <section className="bg-surface-container-low py-space-xl px-margin-mobile lg:px-margin shadow-inner">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="font-label-md text-label-md text-secondary font-bold tracking-widest uppercase">
              The Pillars of VKR
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              Our Enduring Values
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The founding principles that have sustained our standard of excellence across fifty
              continuous years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* 1. Quality */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md hover:-translate-y-1 transition-transform flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">verified</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">QUALITY</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We focus on carefully selected products and consistent quality.
                </p>
              </div>
              <div className="pt-space-xs flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                <span>Carefully Selected</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>
            {/* 2. Trust */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md hover:-translate-y-1 transition-transform flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">handshake</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">TRUST</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Five decades of customer relationships built on reliability and trust.
                </p>
              </div>
              <div className="pt-space-xs flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                <span>Five Decades Strong</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>
            {/* 3. Experience */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md hover:-translate-y-1 transition-transform flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">EXPERIENCE</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  50 years of experience in the cashew and dry-fruit business.
                </p>
              </div>
              <div className="pt-space-xs flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                <span>Specialized Knowledge</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>
            {/* 4. Customer Satisfaction */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md hover:-translate-y-1 transition-transform flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">sentiment_very_satisfied</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">
                  CUSTOMER SATISFACTION
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our customers remain at the heart of our business.
                </p>
              </div>
              <div className="pt-space-xs flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold">
                <span>At Our Heart</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: OUR JOURNEY (1976 - 2026) */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl" id="journey">
        <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
          <span className="font-label-md text-label-md text-secondary font-bold tracking-widest uppercase">
            Chronicle of Excellence
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
            Our Journey (1976 – 2026)
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Step through fifty years of sustained commitment, relationships, and regional
            agricultural mastery.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative my-space-lg">
          <div className="h-1 bg-surface-container-high rounded-full relative top-1/2 -translate-y-1/2 z-0 mx-16">
            <div className="h-full bg-secondary w-full rounded-full"></div>
          </div>
          <div className="grid grid-cols-4 gap-gutter relative z-10 -mt-7">
            {steps.map((st, idx) => (
              <div
                key={st.year}
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setActiveStep(idx)}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
                    activeStep === idx
                      ? 'bg-primary-container text-secondary-fixed scale-110 ring-4 ring-secondary/30'
                      : 'bg-surface-container-highest text-secondary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">{st.icon}</span>
                </div>
                <div className="mt-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-md w-full space-y-space-xs transition-shadow group-hover:shadow-xl">
                  <span className="font-label-md text-label-md text-secondary font-bold">
                    {st.year}
                  </span>
                  <h4 className="font-title-md text-title-md font-bold text-primary">{st.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-6 space-y-space-lg">
          <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-secondary"></div>
          {steps.map((st) => (
            <div key={st.year} className="relative space-y-space-xs">
              <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center shadow">
                <span className="material-symbols-outlined text-[14px]">{st.icon}</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md space-y-space-xs">
                <span className="font-label-md text-label-md text-secondary font-bold">
                  {st.year}
                </span>
                <h4 className="font-title-md text-title-md font-bold text-primary">{st.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: MANUFACTURING / PROCESSING SECTION */}
      <section className="bg-surface-container-low py-space-xl px-margin-mobile lg:px-margin shadow-inner">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-6 space-y-space-md">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[20px]">factory</span>
                <span className="font-label-md text-label-md uppercase tracking-widest font-bold">
                  Production Roots
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                From Our Manufacturing Location
              </h2>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-sm">
                <div className="flex items-center gap-space-xs text-primary font-title-md text-title-md font-bold">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    location_on
                  </span>
                  <span>VKR Agencies</span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  VeerasinganKuppam, Panruti, Cuddalore – 607805
                </p>
                <div className="pt-space-xs flex items-center gap-space-md text-body-sm text-body-sm text-on-surface-variant">
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      domain
                    </span>
                    Core Processing Hub
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      local_shipping
                    </span>
                    Bulk Dispatch Station
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="w-full h-72 sm:h-80 bg-surface-container rounded-2xl shadow-xl overflow-hidden relative">
                <div className="w-full h-full flex flex-col items-center justify-center p-space-lg text-center bg-surface-container-high/40 backdrop-blur-xs">
                  <div className="w-14 h-14 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-sm shadow-md">
                    <span className="material-symbols-outlined text-[28px]">pin_drop</span>
                  </div>
                  <h4 className="font-title-lg text-title-lg font-bold text-primary">
                    Panruti, Cuddalore
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-1">
                    Directly situated within Tamil Nadu&apos;s renowned cashew growing belt for
                    immediate sourcing and freshness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual 5-Step Process Flow */}
          <div className="space-y-space-md pt-space-md">
            <div className="text-center space-y-space-xs">
              <span className="font-label-md text-label-md text-secondary font-bold tracking-widest uppercase">
                Methodical Consistency
              </span>
              <h3 className="font-title-lg text-title-lg font-bold text-primary">
                Our 5-Step Operational Flow
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-space-xs">
                <div className="w-12 h-12 rounded-full bg-surface-container text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">checklist</span>
                </div>
                <span className="font-label-md text-label-md text-secondary font-bold">Step 1</span>
                <h4 className="font-title-md text-title-md font-bold text-primary">Selection</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Carefully selecting raw nuts and dry fruits from prime harvest batches.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-space-xs">
                <div className="w-12 h-12 rounded-full bg-surface-container text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    precision_manufacturing
                  </span>
                </div>
                <span className="font-label-md text-label-md text-secondary font-bold">Step 2</span>
                <h4 className="font-title-md text-title-md font-bold text-primary">Processing</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Expert handling and skilled artisanal deshelling and sorting.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-space-xs">
                <div className="w-12 h-12 rounded-full bg-surface-container text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <span className="font-label-md text-label-md text-secondary font-bold">Step 3</span>
                <h4 className="font-title-md text-title-md font-bold text-primary">Quality</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Rigorous manual inspection according to strict size and grade criteria.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-space-xs">
                <div className="w-12 h-12 rounded-full bg-surface-container text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">inventory</span>
                </div>
                <span className="font-label-md text-label-md text-secondary font-bold">Step 4</span>
                <h4 className="font-title-md text-title-md font-bold text-primary">Packaging</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Sealing kernels in protective vacuum packaging for lasting freshness.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-space-xs sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">sentiment_satisfied</span>
                </div>
                <span className="font-label-md text-label-md text-secondary font-bold">Step 5</span>
                <h4 className="font-title-md text-title-md font-bold text-primary">Customer</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Delivering reliably for retail consumers, caterers, and wholesale partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Touchpoint Banner */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="bg-primary-container text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-gutter">
            <div className="space-y-space-sm text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-highest/20 rounded-full text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span className="font-label-md text-label-md tracking-wider uppercase font-semibold">
                  Direct Customer Care
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg font-bold text-surface-bright">
                Connect With VKR Directly
              </h3>
              <p className="font-body-lg text-body-lg text-inverse-on-surface/90 leading-relaxed">
                Whether inquiring about premium retail grades or scheduling wholesale shipments, we
                welcome you to reach out directly to our team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-md">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg rounded-xl shadow-lg hover:bg-secondary-fixed-dim transition-all"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello VKR Cashew & Dry Fruits, I am interested in your products.')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp ({PHONE_1})</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface/10 text-surface-bright hover:bg-surface/20 font-label-lg text-label-lg rounded-xl transition-all"
                href={`tel:${PHONE_1}`}
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Direct Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
