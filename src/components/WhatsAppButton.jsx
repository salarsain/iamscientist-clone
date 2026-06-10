import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      href="https://api.whatsapp.com/send?phone=923310001900&text=Hey%20can%20I%20get%20more%20information%20about%20registration%3F"
      id="whatsapp-btn"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  )
}
