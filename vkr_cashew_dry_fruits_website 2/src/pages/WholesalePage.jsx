import { useState } from 'react'
import {
  PHONE_1,
  PHONE_2,
  WHATSAPP_NUMBER,
  cashews,
  dryFruits,
} from '../data/products'

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || ''

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    productCategory: '',
    productGrade: '',
    requiredQuantity: '100+ kg',
    businessLocation: '',
    messageRequirements: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const getGradeOptions = () => {
    if (formData.productCategory === 'cashews') {
      return cashews.map((c) => ({ label: `${c.name} (${c.grade})`, value: c.name }))
    }
    if (formData.productCategory === 'dry-fruits') {
      return dryFruits.map((d) => ({ label: d.name, value: d.name }))
    }
    if (formData.productCategory === 'both') {
      return [
        { label: 'Assorted Bulk Consignment (Cashews + Dry Fruits)', value: 'Assorted Both' },
        ...cashews.map((c) => ({ label: `Cashew: ${c.name}`, value: c.name })),
        ...dryFruits.map((d) => ({ label: `Dry Fruit: ${d.name}`, value: d.name })),
      ]
    }
    return []
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      formType: 'wholesale',
      name: formData.fullName,
      businessName: formData.businessName,
      phone: formData.phoneNumber,
      email: formData.email,
      location: formData.businessLocation,
      product: formData.productGrade || 'Wholesale Order',
      category: formData.productCategory || 'Wholesale',
      quantity: formData.requiredQuantity,
      subject: `Wholesale Enquiry: ${formData.businessName} - ${formData.productGrade || 'Bulk'}`,
      message: formData.messageRequirements,
      source: window.location.pathname,
    }

    try {
      if (GOOGLE_APPS_SCRIPT_URL) {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
      }
      setStatus('success')
    } catch (err) {
      console.error('Wholesale submit error:', err)
      setStatus('error')
    }
  }

  const waWholesaleMsg = encodeURIComponent(
    `Hello VKR Cashew & Dry Fruits, I am interested in placing a wholesale/bulk order for ${
      formData.businessName ? `[${formData.businessName}]` : 'our business'
    }. Product: ${formData.productGrade || 'Cashews/Dry Fruits'}, Quantity: ${
      formData.requiredQuantity
    }. Location: ${formData.businessLocation || 'Tamil Nadu'}. Please share your wholesale price sheet.`
  )

  return (
    <div className="flex flex-col w-full">
      {/* Top Editorial Ribbon */}
      <div className="w-full bg-primary-container text-surface-bright py-2.5 px-margin-mobile lg:px-margin shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-xs text-center sm:text-left">
          <div className="flex items-center gap-space-xs mx-auto sm:mx-0">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            <span className="font-label-md text-label-md tracking-widest uppercase text-secondary-fixed">
              B2B Institutional Supply Desk
            </span>
            <span className="text-outline-variant hidden md:inline">•</span>
            <span className="font-body-sm text-body-sm text-surface-container-high hidden md:inline">
              Pan-India Freight Dispatches from Panruti
            </span>
          </div>
          <div className="flex items-center gap-space-md mx-auto sm:mx-0">
            <a
              className="font-label-md text-label-md text-surface-bright hover:text-secondary-fixed transition-colors flex items-center gap-1"
              href={`tel:${PHONE_1}`}
            >
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                phone_in_talk
              </span>
              <span>{PHONE_1}</span>
            </a>
            <span className="text-outline-variant/40">|</span>
            <a
              className="font-label-md text-label-md text-surface-bright hover:text-secondary-fixed transition-colors flex items-center gap-1"
              href={`tel:${PHONE_2}`}
            >
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                call
              </span>
              <span>{PHONE_2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero & Heritage Statement */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24">
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-secondary-fixed/15 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-7 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-highest/80 shadow-sm text-on-surface">
                <span
                  className="material-symbols-outlined text-[18px] text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  50 Years Of Processing Mastery (1976–2026)
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight leading-tight">
                Wholesale Cashews &amp; Dry Fruits
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Quality products for retailers, dealers, businesses and bulk buyers. Backed by 50
                years of processing heritage and supply consistency. Direct dispatch from
                VeerasinganKuppam, Panruti.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  className="px-space-lg py-3.5 bg-primary-container text-surface-bright font-label-lg text-label-lg rounded-lg shadow-md hover:bg-primary transition-all inline-flex items-center gap-space-xs group"
                  href="#wholesale-form-section"
                >
                  <span>Send Wholesale Enquiry</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform text-secondary-fixed">
                    arrow_downward
                  </span>
                </a>
                <a
                  className="px-space-md py-3.5 bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-high transition-colors inline-flex items-center gap-space-xs"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello VKR Cashew & Dry Fruits, I am interested in placing a wholesale/bulk order. Please share your product details and pricing.')}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">chat</span>
                  <span>Direct WhatsApp Desk</span>
                </a>
              </div>
              {/* Micro Trust Marks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-md">
                <div className="p-space-sm bg-surface-container rounded-lg shadow-sm">
                  <p className="font-grade-display text-grade-display text-primary">
                    50 kg – Multi-Ton
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Flexible Volume Tiers
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg shadow-sm">
                  <p className="font-grade-display text-grade-display text-primary">Panruti</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct Factory Dispatch
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container rounded-lg shadow-sm col-span-2 sm:col-span-1">
                  <p className="font-grade-display text-grade-display text-primary">1976</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Continuous Lineage
                  </p>
                </div>
              </div>
            </div>
            {/* Right: Tactile Visual Bento */}
            <div className="lg:col-span-5 relative">
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-xl relative overflow-hidden">
                <div className="relative w-full h-80 rounded-lg overflow-hidden bg-surface-container">
                  <img
                    alt="Commercial bulk processing and grading of whole cashews and golden dry fruits in a traditional clean wholesale facility"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwgmeGhaZAgyvH_Y763y0zGIMR4LCSFSqeEXSZFdb9WH8XSXWnIj1Jo6XfjkJQ7JgPJVQ0J0iQkCF2TlYSsSo4Ak27tzCfeMk5cAFyGeZa1Jp9C_ffpG44D92iFq3HsTdG8Smf1jyAckuU6kpY047wuhuGItLERZT1WwOdd0xPL3OPHGMjyeRPO2lSF7TstUa430IRLlSDHXAca-KyD0tEoWGdlG8MIkp9DbobQn9pLFMbECbeYmmD"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-space-sm bg-surface/90 backdrop-blur-md rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                          Origin Assurance
                        </span>
                        <p className="font-title-md text-title-md text-primary font-semibold">
                          VeerasinganKuppam, Panruti
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Wholesale Enquiry Section */}
      <section className="py-space-xl bg-surface-container-low" id="wholesale-form-section">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left: Context, Grade Quick Reference & Direct Contacts */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="space-y-space-xs">
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  Priority Processing
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Wholesale Quotation Desk
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Submit your specific grade requirement, packaging preference, and target tonnage.
                  Our direct commercial manager will formulate an institutional quote.
                </p>
              </div>
              {/* Direct Communication Cards Box */}
              <div className="bg-surface rounded-xl p-space-md shadow-md space-y-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    support_agent
                  </span>
                  <h3 className="font-title-md text-title-md font-bold text-primary">
                    Need Immediate Bulk Quotes?
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Contact our dispatch desk directly during business hours (9:00 AM – 8:00 PM IST)
                  for active wholesale price sheets and prompt stock confirmations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  <a
                    className="p-space-sm bg-surface-container-high rounded-lg hover:bg-secondary-fixed/30 transition-colors flex items-center justify-between"
                    href={`tel:${PHONE_1}`}
                  >
                    <div>
                      <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                        Desk Line 1
                      </span>
                      <p className="font-title-md text-title-md text-primary font-bold">{PHONE_1}</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                  </a>
                  <a
                    className="p-space-sm bg-surface-container-high rounded-lg hover:bg-secondary-fixed/30 transition-colors flex items-center justify-between"
                    href={`tel:${PHONE_2}`}
                  >
                    <div>
                      <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                        Desk Line 2
                      </span>
                      <p className="font-title-md text-title-md text-primary font-bold">{PHONE_2}</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                  </a>
                </div>
                <a
                  className="w-full py-3 px-space-md bg-primary-container text-surface-bright rounded-lg shadow-sm hover:bg-primary transition-colors flex items-center justify-center gap-space-xs font-label-lg text-label-lg"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello VKR Cashew & Dry Fruits, I am interested in placing a wholesale/bulk order. Please share your product details and pricing.')}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    chat
                  </span>
                  <span>WhatsApp Bulk Desk</span>
                </a>
              </div>
              {/* Product Catalog Overview Callout */}
              <div className="bg-surface-container-highest/60 rounded-xl p-space-md space-y-space-xs">
                <h4 className="font-label-lg text-label-lg text-primary uppercase font-bold tracking-wider">
                  Catalog Reference
                </h4>
                <div className="grid grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <div>
                    <strong className="text-on-surface block mb-1">Cashews:</strong>
                    <span>W-180 Jumbo King</span>
                    <br />
                    <span>W-240 Premium Large</span>
                    <br />
                    <span>W-320 Standard Table</span>
                    <br />
                    <span>W-400 Select Small</span>
                    <br />
                    <span>Splits (JH) &amp; WSP Pieces</span>
                  </div>
                  <div>
                    <strong className="text-on-surface block mb-1">Dry Fruits:</strong>
                    <span>California Almonds</span>
                    <br />
                    <span>Kashmiri Walnuts</span>
                    <br />
                    <span>Royal Athi Palam (Figs)</span>
                    <br />
                    <span>Medjool &amp; Dates</span>
                    <br />
                    <span>Raisins, Pista, Foxnuts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Wholesale Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface rounded-xl p-space-md md:p-space-lg shadow-xl relative overflow-hidden">
                {/* Status Banners */}
                {status === 'success' && (
                  <div className="mb-space-md p-space-md bg-secondary-fixed rounded-lg text-primary shadow-sm flex items-start gap-space-xs animate-fadeIn">
                    <span className="material-symbols-outlined text-[24px] text-secondary">
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold">
                        Enquiry Registered Successfully
                      </h4>
                      <p className="font-body-md text-body-md font-medium text-on-surface">
                        Thank you! Your enquiry has been submitted successfully. Our commercial desk
                        will contact you promptly.
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waWholesaleMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-primary-container text-on-primary font-label-md text-label-md rounded font-bold"
                      >
                        <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                          chat
                        </span>
                        <span>Also Notify on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-space-md p-space-md bg-error-container text-error rounded-lg shadow-sm flex items-start gap-space-xs animate-fadeIn">
                    <span className="material-symbols-outlined text-[24px]">error</span>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold">Submission Notice</h4>
                      <p className="font-body-md text-body-md">
                        Unable to submit your enquiry. Please try WhatsApp or call us directly.
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waWholesaleMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-primary-container text-on-primary font-label-md text-label-md rounded font-bold"
                      >
                        <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                          chat
                        </span>
                        <span>Send via WhatsApp ({PHONE_1})</span>
                      </a>
                    </div>
                  </div>
                )}

                <form className="space-y-space-md" onSubmit={handleSubmit}>
                  {/* 1 & 2: Names */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="space-y-1">
                      <label
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                        htmlFor="full-name"
                      >
                        1. Full Name *
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                        id="full-name"
                        placeholder="e.g. Ramesh Krishnan"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                        htmlFor="business-name"
                      >
                        2. Business Name / Firm Name *
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                        id="business-name"
                        placeholder="e.g. Sri Balaji Sweets & Bakers"
                        required
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* 3 & 4: Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="space-y-1">
                      <label
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                        htmlFor="phone-number"
                      >
                        3. Phone Number (Required) *
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                        id="phone-number"
                        placeholder="e.g. 8838885921"
                        required
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                        htmlFor="email-address"
                      >
                        4. Email Address
                      </label>
                      <input
                        className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                        id="email-address"
                        placeholder="e.g. procurement@firm.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* 5 & 6: Category and Dynamic Grade Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="space-y-1">
                      <label
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                        htmlFor="product-category"
                      >
                        5. Product Category *
                      </label>
                      <select
                        className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                        id="product-category"
                        required
                        value={formData.productCategory}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            productCategory: e.target.value,
                            productGrade: '',
                          })
                        }
                      >
                        <option value="">[Select Category]</option>
                        <option value="cashews">Cashews</option>
                        <option value="dry-fruits">Dry Fruits</option>
                        <option value="both">Both (Cashews &amp; Dry Fruits)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                        htmlFor="product-grade"
                      >
                        6. Product / Grade Selection *
                      </label>
                      <select
                        className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                        id="product-grade"
                        required
                        value={formData.productGrade}
                        onChange={(e) => setFormData({ ...formData, productGrade: e.target.value })}
                      >
                        <option value="">
                          {formData.productCategory
                            ? '[Select Specific Grade]'
                            : 'Please select a category first'}
                        </option>
                        {getGradeOptions().map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 7: Required Quantity Selector */}
                  <div className="space-y-space-xs">
                    <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
                      7. Required Quantity Tiers *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {['1–5 kg', '5–25 kg', '25–100 kg', '100+ kg', 'Custom / Multi-Ton'].map(
                        (tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setFormData({ ...formData, requiredQuantity: tier })}
                            className={`px-3 py-2.5 rounded-lg text-center font-label-md text-label-md transition-all shadow-sm ${
                              formData.requiredQuantity === tier
                                ? 'bg-primary-container text-surface-bright font-bold'
                                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                            }`}
                          >
                            {tier}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* 8: Business Location */}
                  <div className="space-y-1">
                    <label
                      className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                      htmlFor="business-location"
                    >
                      8. Business Location / City / State *
                    </label>
                    <input
                      className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                      id="business-location"
                      placeholder="e.g. Madurai, Tamil Nadu / Bangalore, Karnataka"
                      required
                      type="text"
                      value={formData.businessLocation}
                      onChange={(e) =>
                        setFormData({ ...formData, businessLocation: e.target.value })
                      }
                    />
                  </div>

                  {/* 9: Message / Specific Packaging Requirements */}
                  <div className="space-y-1">
                    <label
                      className="block font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold"
                      htmlFor="message-requirements"
                    >
                      9. Message / Specific Packaging Requirements
                    </label>
                    <textarea
                      className="w-full bg-surface-container-low px-4 py-3 rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface focus:shadow-md transition-all resize-none"
                      id="message-requirements"
                      placeholder="Mention specifics: e.g. 10 kg vacuum tins required, weekly consignment schedule, sample approval need..."
                      rows="3"
                      value={formData.messageRequirements}
                      onChange={(e) =>
                        setFormData({ ...formData, messageRequirements: e.target.value })
                      }
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-space-xs">
                    <button
                      className="w-full py-4 px-space-lg bg-primary-container text-surface-bright font-label-lg text-label-lg rounded-lg shadow-md hover:bg-primary hover:shadow-lg transition-all flex items-center justify-center gap-space-xs disabled:opacity-75"
                      id="submit-button"
                      type="submit"
                      disabled={status === 'sending'}
                    >
                      <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                        send
                      </span>
                      <span>
                        {status === 'sending' ? 'Sending...' : 'Submit Wholesale Enquiry'}
                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="font-body-sm text-body-sm text-outline">
                      Trade confidential. All pricing details are dispatched strictly to authorized
                      commercial buyers.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Branch Locations Section */}
      <section className="py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
                Physical Establishments
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Location Reference &amp; Facilities
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Visit or inspect consignments at our direct factory processing yard or commercial
              Neyveli branch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Processing Hub */}
            <div className="bg-surface-container-low rounded-xl p-space-lg shadow-md space-y-space-md relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed rounded-lg text-primary font-label-md text-label-md font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">
                    precision_manufacturing
                  </span>
                  <span>Processing Hub &amp; Factory</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">VKR Agencies</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  VeerasinganKuppam, Panruti, Cuddalore – 607805
                </p>
                <div className="space-y-1 text-body-sm text-body-sm text-on-surface-variant pt-2">
                  <p>• Steam Roasting &amp; Decortication Yard</p>
                  <p>• Vacuum Tin Sealing &amp; Nitrogen Packaging Line</p>
                  <p>• Multi-Ton Bulk Sacking &amp; Freight Loading Bay</p>
                </div>
              </div>
              <div className="pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-semibold">
                  Factory Direct Line: {PHONE_1}
                </span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello VKR Agencies Panruti, I want to discuss factory direct consignment rates.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary font-bold hover:underline"
                >
                  <span>Chat with Dispatch</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Branch Retail Office */}
            <div className="bg-surface-container-low rounded-xl p-space-lg shadow-md space-y-space-md relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-space-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-lg text-primary font-label-md text-label-md font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">storefront</span>
                  <span>Commercial Counter &amp; Samples</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">
                  VKR Cashew &amp; Dry Fruits
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  26, Daily Bazaar, Block-19, Neyveli, Cuddalore
                </p>
                <div className="space-y-1 text-body-sm text-body-sm text-on-surface-variant pt-2">
                  <p>• Retail Counter &amp; Direct Tasting Samples</p>
                  <p>• Grade Evaluation for Local Retailers</p>
                  <p>• Quick Dispatch for Regional District Deliveries</p>
                </div>
              </div>
              <div className="pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-semibold">
                  Branch Line: {PHONE_2}
                </span>
                <a
                  href={`tel:${PHONE_2}`}
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary font-bold hover:underline"
                >
                  <span>Call Neyveli Branch</span>
                  <span className="material-symbols-outlined text-[16px]">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
