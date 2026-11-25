import { useState } from 'react'
import { WHATSAPP_NUMBER, getWhatsAppProductMsg, submitEnquiry } from '../data/products'

export default function EnquiryModal({ product, onClose }) {
  const [quantity, setQuantity] = useState('1–5 kg')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const productName = product?.name || 'General Product Enquiry'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const payload = {
      formType: 'price_request',
      name: formData.name,
      businessName: '',
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      product: productName,
      category: product?.category || 'Cashews & Dry Fruits',
      quantity: quantity,
      subject: `Price Request: ${productName}`,
      message: formData.message,
      source: window.location.pathname,
    }

    try {
      await submitEnquiry(payload)
      setStatus('success')
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
    }
  }

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppProductMsg(productName)}`

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-surface rounded-2xl max-w-lg w-full p-space-lg shadow-2xl space-y-space-md relative my-8">
        {/* Modal Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wider">
              Fast Inquiry • Factory Direct
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              Get Best Price — {productName}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              We respond within hours with exact tier quotations.
            </p>
          </div>
          <button
            className="p-1 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            onClick={onClose}
            type="button"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {status === 'success' ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed/30 text-secondary flex items-center justify-center mx-auto shadow-sm">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-primary font-bold">
              Thank you!
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Your enquiry has been submitted successfully.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-md py-2.5 bg-primary-container text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">chat</span>
                <span>Open in WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-space-md py-2.5 bg-surface-container text-on-surface font-label-md text-label-md font-semibold rounded-lg hover:bg-surface-container-high transition-colors"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        ) : status === 'error' ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-error-container text-error flex items-center justify-center mx-auto shadow-sm">
              <span className="material-symbols-outlined text-[32px]">error</span>
            </div>
            <p className="font-body-md text-body-md text-error font-semibold">
              Unable to submit your enquiry. Please try WhatsApp or call us directly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="px-space-md py-2.5 bg-surface-container text-primary font-label-md text-label-md font-bold rounded-lg flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
                <span>Call Directly</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-md py-2.5 bg-primary-container text-on-primary font-label-md text-label-md font-bold rounded-lg flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <form className="space-y-space-sm" onSubmit={handleSubmit}>
            {/* Quantity Tier Selection */}
            <div className="space-y-1.5">
              <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase">
                Quantity Requirement *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['1–5 kg', '5–25 kg', '25–100 kg', '100+ kg Bulk'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setQuantity(t)}
                    className={`tier-btn px-2.5 py-2 text-center rounded font-label-md text-label-md transition-all ${
                      quantity === t
                        ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div className="space-y-1">
                <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase">
                  Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-container-low px-3 py-2 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. 8838885921"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-surface-container-low px-3 py-2 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                />
              </div>
            </div>

            {/* Email & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div className="space-y-1">
                <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-container-low px-3 py-2 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase">
                  Location / City *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Neyveli, Chennai, Bangalore"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-surface-container-low px-3 py-2 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors"
                />
              </div>
            </div>

            {/* Specific message */}
            <div className="space-y-1">
              <label className="block font-label-md text-label-md text-on-surface font-semibold uppercase">
                Message / Packaging Specifics
              </label>
              <textarea
                rows={2}
                placeholder="Mention tins, pouches, sample requirements, or delivery deadline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-surface-container-low px-3 py-2 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors resize-none"
              ></textarea>
            </div>

            {/* Action buttons */}
            <div className="pt-space-xs flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex-1 py-3 bg-primary-container text-on-primary font-label-lg text-label-lg font-bold rounded-lg shadow hover:bg-primary transition-colors flex items-center justify-center gap-1.5 disabled:opacity-75"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                  send
                </span>
                <span>{status === 'sending' ? 'Sending...' : 'Get Instant Price'}</span>
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-surface-container text-primary font-label-lg text-label-lg font-bold rounded-lg hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5 text-center"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
