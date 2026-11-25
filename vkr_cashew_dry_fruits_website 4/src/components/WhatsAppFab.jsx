import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../data/products'

export default function WhatsAppFab() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center justify-center p-3.5 bg-emerald-700 hover:bg-emerald-800 text-on-primary rounded-full shadow-[0_8px_24px_rgba(2,34,13,0.35)] transition-all transform hover:scale-105"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_DEFAULT_MSG}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="material-symbols-outlined text-[28px]">chat</span>
      <span className="absolute right-full mr-3 whitespace-nowrap bg-primary-container text-on-primary font-label-md text-label-md px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
        Chat with VKR Specialist
      </span>
    </a>
  )
}
