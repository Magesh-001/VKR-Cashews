import { useState } from 'react'
import {
  PHONE_1,
  PHONE_2,
  EMAIL,
  WHATSAPP_NUMBER,
  WHATSAPP_DEFAULT_MSG,
} from '../data/products'

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || ''

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Wholesale Enquiry',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      formType: 'contact',
      name: formData.name,
      businessName: '',
      phone: formData.phone,
      email: formData.email,
      location: '',
      product: '',
      category: '',
      quantity: '',
      subject: formData.subject,
      message: formData.message,
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
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Wholesale Enquiry',
        message: '',
      })
    } catch (err) {
      console.error('Contact submit error:', err)
      setStatus('error')
    }
  }

  const waContactMsg = encodeURIComponent(
    `Hello VKR Cashew & Dry Fruits, I am reaching out from your website. Subject: ${formData.subject}. Please assist.`
  )

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Header */}
      <div className="relative w-full overflow-hidden bg-surface-container-low py-space-xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded text-secondary font-label-md text-label-md uppercase tracking-widest font-semibold shadow-sm">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              <span>Direct Dispatch &amp; Trade Desk</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
              Get in Touch With VKR
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Have questions about our grades, wholesale consignments, or retail orders? Reach out
              to our dedicated team.
            </p>
          </div>
          {/* Trust points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-space-lg">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md flex items-center gap-4 transition-transform hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[26px]">verified</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">
                  Heritage Standard
                </span>
                <span className="font-title-md text-title-md font-bold text-primary">
                  50 Years of Purity
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md flex items-center gap-4 transition-transform hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[26px]">local_shipping</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">
                  Consignments
                </span>
                <span className="font-title-md text-title-md font-bold text-primary">
                  Pan-India Bulk Freight
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md flex items-center gap-4 transition-transform hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[26px]">schedule</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">
                  Trade Desk
                </span>
                <span className="font-title-md text-title-md font-bold text-primary">
                  Immediate Turnaround
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form & Contact Channels Section */}
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* Left Column: Fast Action Direct Desk & Channels */}
          <div className="lg:col-span-7 space-y-space-lg">
            <div className="space-y-space-xs">
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-widest">
                Rapid Response
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                Fast Action Direct Desk
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Immediate phone and messenger channels for wholesale quotations and retail orders.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Line 01 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md space-y-space-md flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-surface-container text-secondary font-label-md text-label-md rounded font-semibold uppercase">
                      Line 01
                    </span>
                    <span className="material-symbols-outlined text-secondary">phone_in_talk</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">Primary Desk</h3>
                  <p className="font-body-lg text-body-lg font-bold text-on-surface tracking-wide">
                    {PHONE_1}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct commercial inquiries, cashew grades allocation, and expedited quotes.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold shadow hover:bg-on-surface-variant transition-colors"
                    href={`tel:${PHONE_1}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Call Now</span>
                  </a>
                  <a
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-tertiary-container text-on-primary rounded-lg font-label-md text-label-md font-bold shadow hover:bg-primary transition-colors"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                      chat
                    </span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Line 02 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md space-y-space-md flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-surface-container text-secondary font-label-md text-label-md rounded font-semibold uppercase">
                      Line 02
                    </span>
                    <span className="material-symbols-outlined text-secondary">phone_forwarded</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">Secondary Desk</h3>
                  <p className="font-body-lg text-body-lg font-bold text-on-surface tracking-wide">
                    {PHONE_2}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Factory direct scheduling, delivery logistics, and retail store questions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold shadow hover:bg-on-surface-variant transition-colors"
                    href={`tel:${PHONE_2}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Call Now</span>
                  </a>
                  <a
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-tertiary-container text-on-primary rounded-lg font-label-md text-label-md font-bold shadow hover:bg-primary transition-colors"
                    href={`https://wa.me/919345020801?text=${WHATSAPP_DEFAULT_MSG}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                      chat
                    </span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col sm:flex-row items-center justify-between gap-gutter">
              <div className="flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[24px]">mail</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-surface-container text-secondary font-label-md text-label-md rounded font-semibold uppercase">
                      Official Email
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      Consignments &amp; Enquiries
                    </span>
                  </div>
                  <a
                    className="font-title-md text-title-md font-bold text-primary hover:text-secondary transition-colors block mt-1"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-md py-2.5 bg-surface-container hover:bg-surface-container-high text-primary rounded-lg font-label-md text-label-md font-bold transition-colors whitespace-nowrap"
                href={`mailto:${EMAIL}`}
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">send</span>
                <span>Write to Us</span>
              </a>
            </div>

            {/* Instant Price List on WhatsApp */}
            <div className="bg-gradient-to-r from-primary-container via-surface-container-highest/20 to-surface-container p-space-md rounded-xl shadow-md text-on-surface flex flex-col sm:flex-row items-center justify-between gap-gutter">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">forum</span>
                  <span className="font-label-lg text-label-lg font-bold uppercase tracking-wider text-secondary">
                    Instant Price List
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Connect on WhatsApp with our default enquiry template to receive grades and rate
                  quotes.
                </p>
              </div>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-md py-3 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-bold shadow hover:bg-on-surface-variant transition-colors whitespace-nowrap"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                  send
                </span>
                <span>Launch WhatsApp Query</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl relative overflow-hidden">
              <div className="space-y-space-xs mb-space-md">
                <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-widest">
                  Direct Dispatch Inquiry
                </span>
                <h2 className="font-title-lg text-title-lg font-bold text-primary">
                  Send an Inquiry
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Submit your requirements and our order desk will follow up promptly.
                </p>
              </div>

              {/* Status Alert Banners */}
              {status === 'success' && (
                <div className="mb-space-md p-space-sm bg-surface-container rounded-lg text-primary text-body-sm font-body-sm flex items-start gap-2 animate-fadeIn">
                  <span className="material-symbols-outlined text-secondary shrink-0">
                    check_circle
                  </span>
                  <div>
                    <p className="font-bold">Thank you!</p>
                    <p>Your enquiry has been submitted successfully.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-space-md p-space-sm bg-error-container text-error rounded-lg text-body-sm font-body-sm flex items-start gap-2 animate-fadeIn">
                  <span className="material-symbols-outlined shrink-0">error</span>
                  <div>
                    <p className="font-bold">Notice</p>
                    <p>Unable to submit your enquiry. Please try WhatsApp or call us directly.</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waContactMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold inline-block mt-1"
                    >
                      Click here to WhatsApp us directly
                    </a>
                  </div>
                </div>
              )}

              <form className="space-y-space-sm" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                    htmlFor="contact-name"
                  >
                    Full Name *
                  </label>
                  <input
                    className="w-full bg-surface-container-low px-3 py-2.5 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                    id="contact-name"
                    placeholder="Enter your full name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                    htmlFor="contact-phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    className="w-full bg-surface-container-low px-3 py-2.5 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                    id="contact-phone"
                    placeholder="e.g. 8838885921"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                    htmlFor="contact-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-low px-3 py-2.5 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                    id="contact-email"
                    placeholder="Optional for correspondence"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <select
                    className="w-full bg-surface-container-low px-3 py-2.5 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                    <option value="Retail Order">Retail Order</option>
                    <option value="Cashew Grades">Cashew Grades</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label
                    className="block font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider"
                    htmlFor="contact-message"
                  >
                    Message *
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low px-3 py-2.5 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors resize-none"
                    id="contact-message"
                    placeholder="Mention volume requirements, cashew grade preferences, or questions..."
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-bold shadow-md hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2 mt-space-sm disabled:opacity-75"
                  type="submit"
                  disabled={status === 'sending'}
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Cartographic Access & Physical Centers */}
      <div className="bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="max-w-2xl space-y-space-xs">
            <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-widest">
              Cartographic Access
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              Find Our Centers
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Navigate directly to our Neyveli retail showroom or the Panruti factory processing
              unit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Neyveli Center */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col">
              <div className="relative w-full h-64 bg-surface-container flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center text-secondary mb-2">
                  <span className="material-symbols-outlined text-[32px]">storefront</span>
                </div>
                <span className="font-title-lg text-title-lg font-bold text-primary">
                  Neyveli Branch Office
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  26, Daily Bazaar, Block-19, Neyveli, Cuddalore
                </span>
                <span className="font-label-md text-label-md text-secondary mt-2 px-2.5 py-1 bg-surface-container-lowest rounded-full shadow-sm">
                  Retail &amp; Sample Hub
                </span>
              </div>
              <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary font-title-md text-title-md font-bold mb-1">
                    <span className="material-symbols-outlined text-secondary">pin_drop</span>
                    <span>Neyveli Daily Bazaar</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Walk in for on-counter retail packs, tasting samples, and regional customer
                    assistance.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold shadow hover:bg-on-surface-variant transition-colors"
                  href="https://www.google.com/maps/search/?api=1&query=26+Daily+Bazaar+Block-19+Neyveli+Cuddalore"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Open Location</span>
                </a>
              </div>
            </div>

            {/* Panruti Factory */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col">
              <div className="relative w-full h-64 bg-surface-container flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center text-secondary mb-2">
                  <span className="material-symbols-outlined text-[32px]">factory</span>
                </div>
                <span className="font-title-lg text-title-lg font-bold text-primary">
                  Panruti Processing Facility
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  VKR Agencies, VeerasinganKuppam, Panruti, Cuddalore – 607805
                </span>
                <span className="font-label-md text-label-md text-secondary mt-2 px-2.5 py-1 bg-surface-container-lowest rounded-full shadow-sm">
                  Wholesale Freight Center
                </span>
              </div>
              <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary font-title-md text-title-md font-bold mb-1">
                    <span className="material-symbols-outlined text-secondary">pin_drop</span>
                    <span>VeerasinganKuppam, Panruti</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct factory visits for large consignments, inspection of decorticated kernels,
                    and freight dispatching.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold shadow hover:bg-on-surface-variant transition-colors"
                  href="https://www.google.com/maps/search/?api=1&query=VKR+Agencies+VeerasinganKuppam+Panruti+Cuddalore+607805"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Open Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
