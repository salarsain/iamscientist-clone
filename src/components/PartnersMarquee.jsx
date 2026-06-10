const partners = [
  { name: 'Robx', src: 'https://iamscientist.ai/countrypartner/Logos/Robx-Logo.webp' },
  { name: 'BISE Rawalpindi', src: 'https://iamscientist.ai/countrypartner/Logos/BISE_Rawalpindi_logo.webp' },
  { name: 'NITB', src: 'https://iamscientist.ai/countrypartner/Logos/NITB.webp' },
  { name: 'J7 Emporium', src: 'https://iamscientist.ai/countrypartner/Logos/J7Emporium.webp' },
  { name: 'NBF', src: 'https://iamscientist.ai/countrypartner/Logos/nbf_logo.webp' },
  { name: 'VisionTech', src: 'https://iamscientist.ai/countrypartner/Logos/VisionTech.webp' },
  { name: 'J7 Group', src: 'https://iamscientist.ai/countrypartner/Logos/J7-Group.webp' },
  { name: 'Partner', src: 'https://iamscientist.ai/countrypartner/Logos/image.png' },
  { name: 'Moonlight', src: 'https://iamscientist.ai/countrypartner/Logos/moonlight.png' },
]

export default function PartnersMarquee() {
  return (
    <section
      className="text-white py-6 md:py-16"
      style={{
        background: 'linear-gradient(90deg, rgba(35,3,63,1) 32.12%, rgba(0,50,171,0.7) 100%)',
      }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Country Partners
      </h2>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 w-[90%] md:w-[70%] 2xl:w-[50%] mx-auto mt-8 gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white rounded-lg shadow-lg p-1 max-md:h-[5.75rem]"
          >
            <img
              src={partner.src}
              alt={partner.name}
              className="max-md:h-[4.5rem] max-md:w-auto max-md:max-w-[min(100%,6.75rem)] max-md:object-contain w-full h-auto"
              onError={(e) => {
                e.target.onerror = null
                e.target.parentElement.innerHTML = `<span class="text-sm font-bold text-gray-700 px-2 text-center">${partner.name}</span>`
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
